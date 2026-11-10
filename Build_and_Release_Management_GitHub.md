# Software Build and Release Management Using GitHub

**Case study project:** SmileCare Dental Clinic — a responsive single-page website built with React 19 + Vite 8 + Tailwind CSS 4
**Repository:** https://github.com/pottetimani140-a11y/DENTAL-CLINIC
**Release demonstrated:** `v1.0.0`
**Toolchain used:** Git 2.55, Node.js 24, npm 11, Vite 8.2, GitHub (web)

---

## a) Definitions

### Build

A **build** is the process of transforming human-written source code into an executable or deployable
output, and also the *result* of that process.

The build process typically performs:

1. **Dependency resolution** — install the exact library versions recorded in the lockfile.
2. **Compilation / transpilation** — convert JSX and modern JavaScript into browser-ready JavaScript.
3. **Bundling** — combine many modules into a small number of files.
4. **Optimisation** — minify code, compress CSS, hash filenames for cache-busting.
5. **Testing** — run unit/integration tests to prove the code is releasable.
6. **Packaging** — produce the final artifact (folder, `.zip`, `.exe`, container image).

In this project the build is a single command:

```bash
npm run build        # runs: vite build
```

It reads `src/` and writes a self-contained static site into `dist/`.

**Key idea:** a build is *reproducible*. The same commit plus the same lockfile must always produce
the same output. That is why `package-lock.json` is committed to the repository.

### Build Version

A **build version** is a unique, human-readable identifier assigned to one specific build so that
developers, testers, and users can refer to exactly the same set of files.

A version identifier answers three questions: *which build is this?*, *is it newer than what I have?*,
and *is it safe to upgrade?*

The industry standard is **Semantic Versioning (SemVer)**, written as `MAJOR.MINOR.PATCH`:

| Part | Increment when… | Example |
|---|---|---|
| **MAJOR** | incompatible / breaking change | `1.4.2 → 2.0.0` |
| **MINOR** | new feature, backward compatible | `1.4.2 → 1.5.0` |
| **PATCH** | backward-compatible bug fix | `1.4.2 → 1.4.3` |

Extended forms:

- **Pre-release:** `1.0.0-rc.1`, `1.0.0-beta.2` — not yet production-ready.
- **Build metadata:** `1.0.0+build.57` — identifies a specific CI run.
- **Date-based:** `2026.11.10` — common for continuously delivered products.

In this project the version lives in `package.json` and was set with:

```bash
npm version 1.0.0 --no-git-tag-version
```

```json
{
  "name": "default-project",
  "version": "1.0.0",
  "private": true
}
```

### Software Release

A **software release** is a build that has been formally approved, documented, and made available to
users. A build becomes a release only when it is accompanied by:

- a **version label**,
- **release notes** describing what changed,
- the **artifact(s)** users can download,
- a **stable, permanent location** to download from.

| | Build | Release |
|---|---|---|
| Produced by | developer / CI machine | release process + approval |
| Audience | internal | end users |
| Has version? | maybe | always |
| Has notes? | no | yes |
| Has artifact? | temporarily | permanently attached |
| Example | `dist/` from a laptop | GitHub Release `v1.0.0` |

**Summary:** *Build = the act/result of compiling. Build Version = the identifier of one build.
Release = a build that has been packaged, documented, and published.*

---

## b) How Git and GitHub support build and release management

### Git — the source of truth

| Git feature | Role in build & release management |
|---|---|
| **Commit** | Immutable snapshot of the source. Any past release can be rebuilt exactly. |
| **Branch** | Separates `main` (always releasable) from `feature/*` and `hotfix/*` work. |
| **Tag** | A permanent name for one commit — the exact source a release was built from. |
| **Annotated tag** | Tag object with author, date, and message; carries release metadata. |
| **`git log` / `git diff`** | Build the changelog: what changed between `v1.0.0` and `v1.1.0`. |
| **`git bisect`** | Finds the exact commit that introduced a defect. |
| **`git blame`** | Traces a line of code to its author and commit. |
| **`git describe`** | Names any build automatically, e.g. `v1.0.0-3-g61d7875`. |
| **Lockfile in VCS** | Guarantees reproducible dependency trees. |

Git does **not** build or publish anything. It provides the *traceability* that makes a release
auditable: every artifact can be traced back to one commit hash.

### GitHub — automation and distribution

| GitHub feature | Role in build & release management |
|---|---|
| **Pull Requests** | Code review gate before code reaches `main`. |
| **Branch protection** | Blocks direct pushes to `main`; requires passing checks and review. |
| **GitHub Actions** | CI/CD — build and test on every push, publish on every tag. |
| **Actions artifacts** | Temporary storage of build output from a workflow run. |
| **Releases** | Permanent, versioned page with notes + downloadable binaries. |
| **Tags on Releases** | Links the release to the exact source commit. |
| **Environments** | Staging/production deployment gates with required approvals. |
| **Packages** | Hosts npm/container packages produced by the build. |
| **Insights → Dependency graph** | Audits third-party libraries in the build. |
| **Security advisories** | Alerts on vulnerable dependencies before release. |

### The end-to-end flow

```
 feature branch
      │  git push
      ▼
 Pull Request ──► CI: install → lint → test → build
      │                    │
      │  review + approve  │ fail → fix
      ▼                    ▼
    merge to main ────► build verified
      │
      │  git tag -a v1.0.0
      ▼
   push tag ────► CI/CD (or manual)
      │
      ├──► build production artifact
      ├──► GitHub Release created with notes
      └──► artifact attached to the release
                     │
                     ▼
        Users download from /releases/latest
```

---

## c) Steps involved — performed on this project

### Step 1 — Preparing the source code for a build

**Goal:** guarantee that what you build is exactly what is in version control, with a clean,
reproducible dependency tree.

**Actions and commands actually run:**

```bash
cd "C:\Users\manideep\OneDrive\Documents\Default Project"

# 1. Make sure you are on the stable branch and up to date
git checkout main
git pull origin main

# 2. Confirm the working tree is clean — nothing uncommitted
git status

# 3. Install dependencies exactly as recorded in the lockfile
npm install

# 4. Run the production build
npm run build
```

**Pre-build checklist:**

| Check | Status in this project |
|---|---|
| On the correct branch (`main`) | ✅ |
| Working tree clean | ✅ |
| `package-lock.json` committed | ✅ |
| Dependencies installed | ✅ |
| Build output directory ignored by Git | ✅ `dist/` is in `.gitignore` |
| Version number correct in `package.json` | ✅ `1.0.0` |

**Build result:**

```
vite v8.2.2 building client environment for production...
✓ 30 modules transformed.
dist/index.html                   1.92 kB │ gzip:   0.79 kB
dist/assets/index-DDuwDrxH.css   48.30 kB │ gzip:   7.73 kB
dist/assets/index-20M8s1go.js   261.55 kB │ gzip:  75.65 kB
✓ built in 178ms
```

**Why `dist/` is not committed:** build output is *generated*, not *authored*. Committing it causes
merge conflicts, bloats the repository, and lets stale artifacts drift from source. The artifact
belongs in a Release, not in Git. This project's `.gitignore` already contained:

```gitignore
node_modules
dist
dist-ssr
```

**Verification performed after the build** (a step many people skip):

The built site was served locally with `npm run preview` and inspected in a browser:

- 11 sections rendered, all headings present
- **0 console errors**
- 8 images checked → **1 returned HTTP 404** (Dr. Ananya Rao's portrait)

The defect was fixed *before* tagging:

```bash
# src/components/Doctors.jsx — broken Unsplash ID replaced with a valid one
- image: 'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?...'
+ image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?...'

npm run build        # rebuilt
```

Re-verified: all 8 images load, still 0 console errors.

> **Lesson:** the build must be *verified*, not just *produced*. This is exactly why the tag was
> created only after the fix was committed.

---

### Step 2 — Creating a version tag in Git

**Goal:** permanently mark the exact commit that the release was built from.

**Two kinds of tag:**

| Type | Command | Contains |
|---|---|---|
| Lightweight | `git tag v1.0.0` | just a pointer to a commit |
| **Annotated** ✅ | `git tag -a v1.0.0 -m "..."` | tagger name, email, date, message, checksum |

Always use **annotated** tags for releases — GitHub shows them as full releases and they carry
audit metadata.

**Commands actually run:**

```bash
# 1. Commit the release state (version bump)
git add package.json package-lock.json
git commit -m "chore: release v1.0.0"

# 2. Commit the bug fix found during verification
git add src/components/Doctors.jsx
git commit -m "fix: replace broken doctor portrait image (404) found during release verification"

# 3. Create the annotated tag
git tag -a v1.0.0 -m "Release v1.0.0 - initial public release of SmileCare Dental Clinic site"

# 4. Push the commit and the tag
git push origin main --follow-tags
```

`--follow-tags` pushes annotated tags that point to commits being pushed — one command instead of two.

**Verification:**

```bash
git tag                       # v1.0.0
git show v1.0.0               # tag message + the tagged commit
git ls-remote --tags origin   # confirms it exists on GitHub
```

Result on the remote:

```
f09f817de99916f4d153936ab9099bcd97b23927   refs/tags/v1.0.0
61d7875b450fc6c852fce5fa2d13d7e1a254bd18   refs/tags/v1.0.0^{}
```

**Rules for tags:**

- Never move or delete a tag after the release is published — users may already have downloaded it.
  If you must, publish a **new** patch version instead.
- Tag names are conventionally prefixed with `v`: `v1.0.0`, `v1.1.0`, `v2.0.0`.
- A tag can be deleted before publishing: `git tag -d v1.0.0` and `git push origin :refs/tags/v1.0.0`.

---

### Step 3 — Assigning a build/version label

**Goal:** give the build a unique, traceable identity that appears everywhere — in Git, in the
artifact filename, and inside the running application.

**Three places the label is applied in this project:**

**1. Git tag name** — the primary label:

```
v1.0.0
```

**2. `package.json` version** — the label the build tool reads:

```json
"version": "1.0.0"
```

**3. Artifact filename** — the label the user sees when downloading:

```
smilecare-dental-v1.0.0.zip
```

**4. (Optional but recommended) inside the application** — so a user can tell which build they are
running. Add to `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
```

Then anywhere in React:

```jsx
console.log('SmileCare Dental Clinic — version', __APP_VERSION__)
```

**Label conventions used:**

| Label part | Value | Purpose |
|---|---|---|
| Prefix | `v` | marks it as a version |
| MAJOR | `1` | first public release |
| MINOR | `0` | no post-release features yet |
| PATCH | `0` | no post-release fixes yet |
| Artifact name | `smilecare-dental-v1.0.0.zip` | product + version, self-describing |

**Why a self-describing filename matters:** a file called `dist.zip` or `build-final-final.zip` is
useless six months later. `smilecare-dental-v1.0.0.zip` can be identified without opening it.

---

### Step 4 — Creating a GitHub Release

**Goal:** publish the tagged build as an official, documented version with a permanent download URL.

A GitHub Release is built on top of a Git tag. The tag is the *source* marker; the Release is the
*publication*.

**Option A — GitHub web interface (used in this project):**

1. Open `https://github.com/pottetimani140-a11y/DENTAL-CLINIC`
2. In the right sidebar click **Releases** → **Draft a new release**
3. **Choose a tag** → select `v1.0.0` (it already exists — do **not** create a new one)
4. **Release title:** `SmileCare Dental Clinic v1.0.0`
5. **Describe this release** — paste the release notes below
6. Tick **Set as the latest release**
7. **Publish release**

**Release notes used:**

```markdown
## Initial public release

### Features
- Responsive landing page: Hero, About, Services, Doctors, Statistics
- Testimonials, FAQ accordion, Emergency contact section, Footer
- Appointment form with client-side validation
- Scroll-triggered animations and count-up statistics
- Custom SVG icon set and favicon

### Fixes
- Replaced a broken doctor portrait image (HTTP 404) found during release verification

### Install / run
1. Download `smilecare-dental-v1.0.0.zip` from **Assets** below
2. Unzip the archive
3. Serve the folder, e.g. `npx serve` — it is a static build, no server-side code required

**Full changelog:** https://github.com/pottetimani140-a11y/DENTAL-CLINIC/commits/v1.0.0
```

**Option B — GitHub CLI (once `gh` is installed):**

```bash
winget install --id GitHub.cli
gh auth login

gh release create v1.0.0 \
  --title "SmileCare Dental Clinic v1.0.0" \
  --notes-file release-notes.md \
  --latest
```

**Permanent URLs created by a Release:**

```
https://github.com/pottetimani140-a11y/DENTAL-CLINIC/releases/tag/v1.0.0   (this version)
https://github.com/pottetimani140-a11y/DENTAL-CLINIC/releases/latest      (always newest)
```

The `/releases/latest` link is what you give to users — it never needs updating.

**What makes good release notes:**

- Group changes as **Features / Fixes / Breaking changes**
- State the upgrade impact, not just the change
- Include install/run instructions
- Link the full changelog (`/compare/v0.9.0...v1.0.0`)

---

### Step 5 — Attaching the build artifact to the release

**Goal:** give users the actual built files, not just the source code. Source archives that GitHub
generates automatically (`Source code (zip)`) are *not* the build — they still need Node.js and
`npm install` before they will run.

**Commands used to package the artifact:**

```bash
npm run build
Compress-Archive -Path "dist\*" -DestinationPath "smilecare-dental-v1.0.0.zip" -Force
```

**Artifact contents (verified):**

| File | Size |
|---|---|
| `index.html` | 1,924 B |
| `assets/index-20M8s1go.js` | 261,556 B |
| `assets/index-DDuwDrxH.css` | 48,304 B |
| `favicon.svg` | 498 B |
| `icons.svg` | 5,031 B |
| **Total archive** | **86,057 B (~84 KB)** |

**Upload via web interface:**

1. While drafting the release, find the box labelled
   **"Attach binaries by dropping them here or select them to upload"**
2. Drag `smilecare-dental-v1.0.0.zip` into it
3. Wait until the filename and size appear (do not publish mid-upload)
4. Click **Update release** / **Publish release**

**Upload via CLI:**

```bash
gh release upload v1.0.0 .\smilecare-dental-v1.0.0.zip
```

**Verify:** the file appears under **Assets** on the release page, with its size and a download
counter.

**Rules for artifacts:**

- Attach the **build output**, never `node_modules/` or the whole repository.
- Keep the filename versioned: `product-vX.Y.Z.zip`.
- Respect GitHub limits: 2 GB per file, unlimited assets per release.
- Checksums are good practice for large artifacts:
  ```bash
  Get-FileHash .\smilecare-dental-v1.0.0.zip -Algorithm SHA256
  ```
  Publish the hash in the release notes so users can verify their download.

---

## Evidence summary

| Step | Evidence in this repository |
|---|---|
| Source prepared | `main` branch, clean tree, lockfile committed |
| Build executed | `vite v8.2.2`, 30 modules, `dist/` produced |
| Build verified | browser check, 0 console errors, 1 defect found and fixed |
| Version assigned | `package.json` → `1.0.0` |
| Tag created | annotated `v1.0.0` → commit `61d7875` |
| Tag published | `refs/tags/v1.0.0` present on `origin` |
| Artifact packaged | `smilecare-dental-v1.0.0.zip`, 86,057 bytes |
| Release created | GitHub Releases page (tag `v1.0.0`) |
| Artifact attached | Release **Assets** section |

Commit history produced during this exercise:

```
61d7875  fix: replace broken doctor portrait image (404) found during release verification
6dbabc2  chore: ignore release artifacts (*.zip)
d2a1fde  chore: release v1.0.0
2a4f6a4  SmileCare Dental Clinic - complete website
```

---

## How to download this project

**1. Download the source code (to develop further)**

```bash
git clone https://github.com/pottetimani140-a11y/DENTAL-CLINIC.git
cd DENTAL-CLINIC
npm install
npm run dev
```

Or: repository page → green **Code** button → **Download ZIP**.

**2. Download the released build (to just use it)**

Open **Releases → Latest** and download the `.zip` from **Assets**:

```
https://github.com/pottetimani140-a11y/DENTAL-CLINIC/releases/latest
```

Then unzip and serve:

```bash
npx serve smilecare-dental-v1.0.0
```

**3. Download with the GitHub CLI**

```bash
gh release download --repo pottetimani140-a11y/DENTAL-CLINIC
gh release download v1.0.0 --repo pottetimani140-a11y/DENTAL-CLINIC   # specific version
```

---

## How to update to the latest version

**If you cloned with Git (recommended):**

```bash
git checkout main
git pull origin main      # fetch the newest source
npm install               # apply any dependency changes
npm run build             # or: npm run dev
```

**To move to a specific released version:**

```bash
git fetch --tags
git tag                        # list available versions
git checkout v1.0.0            # switch to that release's source
npm install
```

Return to the newest code with `git checkout main`.

**To see what changed between versions:**

```bash
git log --oneline v0.9.0..v1.0.0
git diff v0.9.0 v1.0.0
```

Or on GitHub: **Releases** → compare link, or the **Commits** tab.

**If you downloaded a ZIP:** delete the old folder, download the newest ZIP from the Releases page,
and unzip it. This is why Git is preferred for anything you work on repeatedly.

---

## Common mistakes to avoid

| Mistake | Why it is wrong | Correct approach |
|---|---|---|
| Committing `dist/` or `node_modules/` | Bloats the repo, causes conflicts, artifacts drift from source | Ignore them; attach output to a Release |
| Tagging before the build is verified | You publish a tag pointing at broken code | Build → verify → fix → then tag |
| Lightweight tags for releases | No author/date/message metadata | Use `git tag -a` |
| Reusing or moving a published tag | Users already downloaded that version | Publish a new patch version |
| Naming artifacts `final.zip`, `build2.zip` | Unidentifiable later | `product-vX.Y.Z.zip` |
| Version in `package.json` drifting from the tag | Build reports the wrong version | Bump version in the same commit that gets tagged |
| Attaching the source archive instead of the build | Users must install Node and build it themselves | Attach the compiled artifact |
| No release notes | Users cannot judge whether to upgrade | Write Features / Fixes / Breaking changes |

---

## Recommended automation (next step)

Manual steps 4 and 5 can be fully automated with GitHub Actions. Add
`.github/workflows/release.yml`:

```yaml
name: Build and Release

on:
  push:
    tags:
      - 'v*'

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - name: Package artifact
        run: cd dist && zip -r ../smilecare-dental-${{ github.ref_name }}.zip .

      - name: Create release and attach artifact
        uses: softprops/action-gh-release@v2
        with:
          files: smilecare-dental-${{ github.ref_name }}.zip
          generate_release_notes: true
          draft: false
```

After this file exists, an entire release becomes two commands:

```bash
git tag -a v1.0.1 -m "Release v1.0.1"
git push origin v1.0.1
```

GitHub then builds, packages, writes the notes, and publishes the release automatically — with the
artifact attached and the release notes generated from the commits since the previous tag.

---

## Conclusion

Build and release management separates two concerns that are easy to confuse:

- **Git** records *what the source is* — commits, branches, and tags make every build traceable to an
  exact, immutable state.
- **GitHub** turns that state into something users can obtain — Actions build it, Releases publish it,
  and attached artifacts deliver it.

Applied to this project, the full cycle was completed: the source was prepared and built with Vite,
the build was verified in a browser (which caught a real 404 defect before publication), the version
was labelled `1.0.0`, an annotated tag `v1.0.0` was pushed to GitHub, an 84 KB production artifact was
packaged, and a GitHub Release was prepared to publish it.

The result is a release that is **reproducible** (rebuildable from tag `v1.0.0`), **traceable**
(linked to commit `61d7875`), **identifiable** (`smilecare-dental-v1.0.0.zip`), and **updatable**
(users pull the newest source with `git pull` or download from `/releases/latest`).

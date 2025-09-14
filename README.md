# Project Setup Guide

This guide explains how to **fork**, **clone**, **install prerequisites**,
**build**, and **generate the `_site` folder** from this repository on **macOS**,
**Windows**, and **Ubuntu**.

---

## 📌 Step 1 — Fork This Repository

Forking creates your own copy of this repository under your GitHub account.

1. Go to this repository’s GitHub page.
2. Click the **Fork** button at the top-right corner.

![Fork button screenshot](https://raw.githubusercontent.com/github/explore/main/topics/fork/fork.png)

---

## 📌 Step 2 — Clone Your Fork Locally

Once forked, you can clone your own copy.

Replace `<your-username>` with your actual GitHub username:

```bash```
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

## 📌 Step 3 — Install Prerequisites
This project uses Jekyll to build the site (which generates the _site folder).

### 🖥️ macOS
#### Install Homebrew if you don’t have it already:
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

#### Install Ruby and Jekyll:

```brew install ruby```

```gem install jekyll bundler```

#### Add Ruby to your PATH (if needed):
```echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc```

```source ~/.zshrc```

### 🖥️ Windows
#### Install RubyInstaller for Windows.
#### During installation, check “Add Ruby executables to your PATH”.
#### Install Jekyll and Bundler:

```gem install jekyll bundler```

(Optional) Use Git Bash or WSL for a better terminal experience.

### 🖥️ Ubuntu / Debian
#### Update your package list and install Ruby and build tools:

```sudo apt update```

```sudo apt install -y ruby-full build-essential zlib1g-dev```

#### Set up your Ruby gems directory:

```echo '# Install Ruby Gems to ~/.gem' >> ~/.bashrc```

```echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc```

```echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc```

```source ~/.bashrc```

#### Install Jekyll and Bundler:
```gem install jekyll bundler```

## 📌 Step 4 — Build the Site
From inside the repository folder:

```bundle install```
```bundle exec jekyll build```
This will generate the static website inside the _site folder.

## 📌 Step 5 — Preview the Site (Optional)
### To see the site locally:
```bundle exec jekyll serve```

Then open http://localhost:4000 in your browser.
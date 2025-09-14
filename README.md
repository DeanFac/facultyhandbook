# 📘 Faculty Handbook (Jekyll Site)

This repository contains the source code for the Faculty Handbook site built using **Jekyll**.  
As a collaborator, you can **clone this repository**, build it locally, and generate the static HTML site in the `_site` folder.

---

## 🚀 Getting Started

### 🧩 Prerequisites
You need the following installed on your system:

- **Git**  
- **Ruby** (version 3.1 or higher)
- **Bundler** (Ruby gem to manage dependencies)
- **Jekyll** (installed via Bundler)

---

### 💻 Cloning the Repository

> ⚠️ You must have been invited as a **collaborator** and accepted the invitation.

1. Go to the repo page (you will receive the link).
2. Click the green **`<> Code`** button.
3. Copy the **HTTPS** URL.
This should be the URL: https://github.com/narasimhan-2604/fachandbook.git
4. Clone the repository. For each operating system, you can do the following to clone the repo
### 🍎 macOS / 🐧 Ubuntu / Linux

Open **Terminal** and run:

```bash```
git clone https://github.com/USERNAME/fachandbook.git
cd fachandbook

### Windows
On Command prompt, do the following. This could be insise a specific folder of
your choice.

git clone https://github.com/USERNAME/fachandbook.git
cd fachandbook

## 🍎 macOS Setup
Run the commands on the Terminal.

1. Install Homebrew if you don’t have it:

```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```


2. Install Ruby and Git:

```brew install ruby git```


3. Install Bundler and Jekyll gems:

```gem install bundler jekyll```


4. Install project dependencies:

```bundle install```

5. Build the site:

```bundle exec jekyll build```

The generated site will appear in the _site folder.

## 🪟 Windows Setup

1. Install Git from git-scm.com

2. Install Ruby from rubyinstaller.org
During installation, check “Add Ruby executables to your PATH”

3. After installation, open the Start Command Prompt with Ruby from the Start Menu.

4. Install Bundler and Jekyll:

```gem install bundler jekyll```

5. Install project dependencies:

```bundle install```
Build the site:

```bundle exec jekyll build```
The generated site will appear in the _site folder.

## 🐧 Ubuntu / Linux Setup

1. Install dependencies:

```sudo apt update```
```sudo apt install -y git ruby-full build-essential zlib1g-dev```


2. Add Ruby gems to your PATH:

```echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc```

``` echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc```

```echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc```

```source ~/.bashrc```


3. Install Bundler and Jekyll:

```gem install bundler jekyll```


4. Install project dependencies:

```bundle install```


5. Build the site:

```bundle exec jekyll build```

The generated site will appear in the _site folder.

## 💡 Viewing the Site Locally

To serve the site locally (optional):

```bundle exec jekyll serve```

Then open http://localhost:4000 in your browser.

## Push back to your github
You should push it back to your github account so that any changes you
made, can be saved there. 

```git add .```

```git commit -m "Update content"```

```git push```
---

# Pushing the content to your own fachandbook repository

> [!NOTE]
> Note that, the repository is now in your local computer, you cannot push it back to
my repository (narasimhan-2604/fachandbook) as you do not have write permissions. 
So, you need to create a repo, in your github account and push changes there. Here are the steps

### Create a new empty repo on GitHub called 'fachandbook' via the GitHub website. 
You can google this up or ask ChatGPT nicely, if you do not know how to do it.

### Disconnect the current remote
This removes, my repo as the target for pushing

```git remote remove origin```

### Link your new repository
This makes your repo as the target where changes will be for pushed

```git remote add origin https://github.com/YOUR-USERNAME/fachandbook.git```

### Push to your changes (if you made any) to the new repository

The following commands, will push the content to your repo.
```git branch -M main```
```git push -u origin main```
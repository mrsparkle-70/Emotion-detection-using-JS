
# Emotion Detection Using JS


![68747470733a2f2f63646e352e766563746f7273746f636b2e636f6d2f692f3130303078313030302f39362f39342f766964656f2d7765622d63616d2d636861742d63616d6572612d69636f6e2d77656263616d2d766563746f722d32323932393639342e6a7067](https://user-images.githubusercontent.com/55338588/219953534-e379c4a1-7367-42a2-bd75-50c71f5a8144.jpg)



## About The Project
<div align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/open-source.svg" /><br>
 <img src="https://img.shields.io/badge/-PRs%20welcome-green" />
  <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fmrsparkle-70%2FEmotion-detection-using-JS&countColor=%23263759&style=flat" />
  <img src="https://img.shields.io/github/forks/mrsparkle-70/Emotion-detection-using-JS" />
  <img src="https://img.shields.io/github/stars/mrsparkle-70/Emotion-detection-using-JS" />
  <img src="https://img.shields.io/github/last-commit/mrsparkle-70/Emotion-detection-using-JS" /><br>
   <img src="https://img.shields.io/github/issues/mrsparkle-70/Emotion-detection-using-JS" />
  <img src"https://img.shields.io/github/issues-closed-raw/mrsparkle-70/Emotion-detection-using-JS" />
  <img src="https://img.shields.io/github/issues-closed-raw/mrsparkle-70/Emotion-detection-using-JS" />
  <img src="https://img.shields.io/github/issues-pr-raw/mrsparkle-70/Emotion-detection-using-JS" />
  <img src="https://img.shields.io/github/issues-pr-closed/mrsparkle-70/Emotion-detection-using-JS" />
  </div>
  

## 💥 Features

- Light/dark mode toggle



## 📌 Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 🚀 PENDING WORK: To Be Done

1. Make a small input form which takes name age gender as input below the video tag.

2. Improving the UI using HTML CSS JS for a greater attractive LOOK.

3. Make sure to raise the issues and then make the contributions.

**Let's make it A GREAT UI**


##  🕸 IMPORTANT: Bug Fixes

1. **`navigator.getUserMedia`**

`navigator.getUserMedia` is now deprecated and is replaced by `navigator.mediaDevices.getUserMedia`. To fix this bug replace all versions of `navigator.getUserMedia` with `navigator.mediaDevices.getUserMedia`.

2. **`Low-end Devices Bug`**

The video eventListener for `play` fires up too early on low-end machines, before the video is fully loaded, which causes errors to pop up from the Face API and terminates the script (tested on Debian [Firefox] and Windows [Chrome, Firefox]). Replaced by `playing` event, which fires up when the media has enough data to start playing.



## 📸 Screenshots Of The Project


![ss1](https://user-images.githubusercontent.com/91181981/222946613-4ede0f58-9026-40ca-8d59-46ea74de6702.png)


![ss2](https://user-images.githubusercontent.com/91181981/222946635-0d6be4a6-c3a7-406c-a38f-3ccb9da2a405.png)


![ss3](https://user-images.githubusercontent.com/91181981/222946638-8932d674-0215-4250-b829-b18995ad7095.png)

![ss5](https://user-images.githubusercontent.com/91181981/222946643-544d35ee-ed7e-4a3f-98c2-215a5b1eb23b.png)
![ss6](https://user-images.githubusercontent.com/91181981/222946906-ff01f2c5-30dd-4330-ae7c-805d0db779a2.png)

![ss4](https://user-images.githubusercontent.com/91181981/222946645-11017788-23da-44b8-afb8-9e7bdc5ff60c.png)



## 📑 Contribution Guidelines

1. Issues will be assigned on a First-Come-First-Serve basis and are applicable only when they are opted through GitHub.

2. Each issue needs to be completed within a specific time limit according to its difficulty level (Easy: 1 day, Medium: 2-3 days and Hard: 4 days).

3. If a mentee is unable to solve the allotted issue within the given period, the issue will be passed to other contenders on the discretion of the mentor.

4. For any doubts feel free to ask your queries to the mentors or peer mentees in the discord.


## 🤝 How To Contribute ?

If you think that you can add a new feature or want to fix a bug, we invite you to contribute to Emotion-detection-using-JS and make this project better. To start contributing, follow the below instructions:

1. Create a folder at your desire location (usually at your desktop).

2. Open Git Bash Here

3. Create a Git repository.

Run command `git init`

4. Fork this [Repository](https://github.com/mrsparkle-70/Emotion-detection-using-JS).

5. Clone the forked repository in your local system.

```bash
git clone https://github.com/<your_github_username>/Emotion-detection-using-JS
```

6. Run the following commands in the root directory 
```bash
# Install NodeJS modules
npm install

# Start the development server
npm start

# This will start dev server at localhost:3000
```

7. Raise an issue if you find a bug or add a feature.

8. Wait for the issue to be assigned and proceed only after the issue is assigned to you.

9. Navigate to the project directory.

```bash
cd Emotion-detection-using-JS
```

10. Add a reference(remote) to the original repository.

```bash
git remote add upstream https://github.com/mrsparkle-70/Emotion-detection-using-JS.git
```

11. Check the remotes for this repository.

```bash
git remote -v
```

12. Always take a pull from the upstream repository to your main branch to keep it updated as per the main project repository.

```bash
git pull upstream main
```

13. Create a new branch for your feature.

```bash
git checkout -b <your_branch_name>
```

14. Perfom your desired changes to the code base.


15. Track and stage your changes.

```bash
# Track the changes
git status

# Add changes to Index
git add .
```

16. Commit your changes.

```bash
git commit -m "your_commit_message"
```

17. Push your committed changes to the remote repo.

```bash
git push origin <your_branch_name>
```

18. Go to your forked repository on GitHub and click on `Compare & pull request`.

19. Add an appropriate title and description to your pull request explaining your changes and efforts done.

20. Click on `Create pull request`.


### Congrats! 🥳 You've made your first pull request to this project repo.

Wait for your pull request to be reviewed and if required suggestions would be provided to improve it.

Celebrate 🥳 your success after your pull request is merged successfully.


## 📑 Code Of Conduct

To maintain a safe and inclusive space for everyone to learn and grow, contributors are advised to follow the
[Code Of Conduct](https://github.com/mrsparkle-70/Emotion-detection-using-JS/blob/main/CODE_OF_CONDUCT.md)


## 👨‍💻 GitHub Beginner's Guide

**Are you a beginner in using Github?**

You can refer to the following articles on the basics of Git and Github and also contact me, in case you are stuck:

- [**Forking a Repo**](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

- [**Cloning a Repo**](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)

- [**How to create a Pull Request ?**](https://opensource.com/article/19/7/create-pull-request-github)

- [**Getting started with Git and GitHub**](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)



## 🤵 Project Admin

<a href="https://github.com/mrsparkle-70/mrsparkle-70/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mrsparkle-70/mrsparkle-70" />
</a>




## 😍 Our Valuable Contributors

Thanks to these wonderful people ✨

<a href="https://github.com/mrsparkle-70/Emotion-detection-using-JS/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mrsparkle-70/Emotion-detection-using-JS" />
</a>

💙 Happy Contributions !! 💙


## 📝 Feedback

If you have any feedback, please reach out to us at  edsubham@gmail.com

## 📜 License 

Distributed under the MIT License. 
[MIT](https://choosealicense.com/licenses/mit/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
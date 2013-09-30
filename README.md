# Tweet-Commit.Hook

Send tweets via commit messages

## Usage

**With Hooks**

`hooks add tweet-commit.hook`

`git commit -am "Some commit message with a tweet: artists ship!"`

**Without Hooks**

`npm install node-hooks` than follow the directions for with hooks.

## FAQ

**Not all my commits are being tweeted**

`tweet-commit.hook` only tweets the content after "tweet:" so if there is no "tweet:" in your commit its not going to be tweeted.

**I don't want my tweet to be stored in my git logs**

Working on that. I'm thinking "tweet\r:". [What are your thoughts?](https://github.com/mcwhittemore/tweet-commit.hook).
# Technical-Question

This is the take home technical test for Unbounce

# Description

This Repository uses the [GitHub API](https://developer.github.com/v3/) to implement a function
that processes repository statistics of Clojure projects; 


This function returns a list of repositories ordered by number of stargazers
with the following structure:

  - repository name (in the format `organization/repository-name`)
  - stargazers count
  - authors and number of commits like:
    - email
    - number of commits

## Dependencies

* `JavaAcript`
* `Node.js`

Ensure you have Node.js installed by running `node -v` in Terminal
if you have Node installed you should get the version number back, if not, 

install Node.js on your environment from https://nodejs.org/en/download/

To run the code open terminal, navigate to the home directory, and run `node .\statistics.js`

## Example Usage

Input:

```
data=[
    { 
        repoName: 'clojure/clojure',
        stargazers: 40,
        authors:
        [
          {"email": "...", "number_of_commits": 1000},
          {"email": "...", "number_of_commits": 999},     
        ]     
  }, ...
]

getRepoStat(data);
```

Output:

```
[
  {
    "repository_name": "clojure/clojure",
    "stargazers_count": 50,
    "authors": [
      {"email": "...", "number_of_commits": 1000},
      {"email": "...", "number_of_commits": 999},
      // ...
    ]
  },
  {
    "repository_name": "stuartsierra/component",
    "stargazers_count": 49,
    "authors": [
      {"email": "...", "number_of_commits": 531},
      {"email": "...", "number_of_commits": 921},
      {"email": "...", "number_of_commits": 300},
      // ...
    ]
  }
  // , ...
]

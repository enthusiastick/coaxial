# Coaxial

Coaxial is a chat app using `ActionCable` and `React.js`, with user authentication via GitHub OmniAuth (you'll need application keys, as referenced in the `.env.example` file.) To get it up and running locally:

```bash
$ git clone git@github.com:enthusiastick/coaxial.git
$ bundle install
$ rake db:create
$ rake db:migrate
$ rails server
```

And then, in a separate terminal tab:

```bash
$ ./bin/webpack-dev-server
```

You will also need to have a running Redis on your system (e.g. `brew install redis`.)

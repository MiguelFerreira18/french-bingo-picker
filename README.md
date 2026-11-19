# BecomingFrench

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

## ngrok
Run the project in the class with the following command:

`ngrok https 4200`


## Config ngrok

```bash
# Windows (Chocolatey)
choco install ngrok

# or: npm install -g ngrok

ngrok config add-authtoken <YOUR_TOKEN>
```

Given that the ngrok is already configured with the correct stuff the link should be accepted without a problem.

*If THERE IS A PROBLEM*: Check the file angular.json under serve and then options and add the new url. Don't forget that there may be a prompt to confirm to visit the website and that it is trustworthy

# Showing issue with stream-replace-string type declarations

Use `npm run build:normal` to get the error you would get with a normal import.
Use `npm run build:types` to declare the module with a custom typing.

Should be noted that this simple reproduction gives a different error than I got in my more complicated
repo. In that repo, I couldn't override the types. I'm not sure what the difference is. I think this is
a bit of an undefined situation for tsc.

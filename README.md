# cordova-choo-template

## USAGE
```bash
$ cordova create <project_create_dir> [com.example.projectname] [ProjectClassName] --template cordova-choo-template
```

## How it works
Basically, we are using hooks to overwrite the `www` folder. So, you work 
normally in the `src` folder, and when you run some of the cordova commands, it 
will compile and copy to `www`folder for you. 
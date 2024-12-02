# Node.js Components: 
V8 Engine(C++ and JS), 
Libuv lib (for I/O and Networking), 
Process Execution by Event Driven Architecture.

# Essetial Commands:
## Terminal Commands -
 1. pwd - Show the current directory path.
 2. ls - List files in the current directory.
 3. cd <directory> - Change to a specific directory.
 4. mkdir <name> - Create a new directory.
 5. touch <filename> - Create an empty file.
 6. rm <filename> - Delete a file.
 7. rm -r <directory> - Delete a directory and its contents.
 8. mv <source> <destination> - Move or rename a file/directory.
 9. cp <source> <destination> - Copy files or directories.
## Git Commands -
 1. git init - Initialize a new Git repository.
 2. git clone <repo-url> - Clone a remote repository.
 3. git status - Check the status of your working directory.
 4. git add . - Stage all changes.
 5. git commit -m "message" - Commit staged changes with a message.
 6. git remote add origin <repo-url> - Link your local repo to a remote repo.
 7. git push -u origin <branch> - Push changes to the remote repository.
 8. git pull origin <branch> - Pull changes from the remote repository.
 9. git branch - List branches.
 10. git checkout -b <branch> - Create and switch to a new branch.

# Modules:
## Use 'modules.exports = {func1, func2,...}' to export from a file and Use 'const {func1, func2,...}=require('./dirName/file.js')' to import and use it

# fs Module:
 1. Read File -	fs.readFileSync(),	fs.readFile()
 2. Write File -	fs.writeFileSync(),	fs.writeFile()
 3. Append to File -	fs.appendFileSync(),	fs.appendFile()
 4. Delete File -	fs.unlinkSync(),	fs.unlink()
 5. Create Directory -	fs.mkdirSync(),	fs.mkdir()
 6. Read Directory -	fs.readdirSync(),	fs.readdir()
 7. Delete Directory -	fs.rmdirSync(),	fs.rmdir()
 8. Check Stats -	fs.statSync(),	fs.stat()

# Node.js Architecture and Working: 
1. Start the Process -> 2. Insert into the Queue & Identify the Operation Type ->
3. If Non-Blocking Execute it directly -> 4. If Blocking -> 5. Event Looping start ->
## Node.js Process Components: 
Main Thread(
1. init project -> 
2. register top level code -> 
3. register required modules -> 
4. Event Callbacks registration ->
5. event loop starts (for cpu intensive tasks, it goes to thread pool)
) and Threal Pool. 
## Phases of Event Loop:
The event loop is the core mechanism of Node.js, which manages all asynchronous operations. 
It operates in multiple phases:
1. Timers:
Executes callbacks for setTimeout and setInterval.
2. I/O Callbacks:
Handles callbacks for completed I/O operations.
3. Idle, Prepare:
Internal use, mostly ignored by developers.
4. Poll:
Retrieves new I/O events and executes their callbacks.
5. Check:
Executes callbacks for setImmediate.
6. Close Callbacks:
Executes callbacks for closed sockets or other close events.


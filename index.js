const fs = require('fs');

let fileSaver = (filename, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(`${filename} has been successfuly saved`);
                resolve();
            }
        });
    });
};

let fileReader = (filename, encoder) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoder, (err, file) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Print the loaded file
                // console.log(file);
                resolve(file);
            }
        });
    });
};

let fileRename = (currentFilename, newFilename) => {
    return new Promise((resolve, reject) => {
        fs.rename(currentFilename, newFilename, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('Rename successful!');
                resolve();
            }
        });
    });
};

let fileAppend = (filename, newContent) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, newContent, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('Successfully appended data!');
                resolve();
            }
        });
    });
};

let fileDelete = (filename) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filename, (err) => {
            if (err) {
                console.log(err);
                reject();
            } else {
                console.log('Successfully deleted the file!');
                resolve();
            }
        });
    });
};

let folderSaver = (foldername) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(foldername, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('Folder successfully created!');
                resolve();
            }
        });
    });
};

// !IMPORTANT!
// Deleting folders can only be done
// If said folder is EMPTY
let folderDelete = (foldername) => {
    return new Promise((resolve, reject) => {
        fs.rmdir(foldername, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log('Folder successfully deleted!');
                resolve();
            }
        });
    });
};

let folderReader = (foldername) => {
    return new Promise((resolve, reject) => {
        fs.readdir(foldername, (err, files) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(files);
                resolve(files);
            }
        });
    });
};

async function Start() {
    // Create a file

    try {
        await folderReader('test');
    } catch (e) {
        console.log(e.code);
    }

    return;
    let content = {
        id: 1,
        value: 'this is a JSON',
    };
    await fileSaver('example.txt', JSON.stringify(content));
    let fileContent = await fileReader('example.txt', 'UTF-8');

    console.log(fileContent);
}

// Start();

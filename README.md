# BENB-Board

create ".env" file with:

MONGODB_URI = mongodb://localhost/benb-board
PORT = 8080

# Prework installation
in the root directory:
npm install

in the subdirectory "client":
npm install

# create branch to protect master
git checkout -b BRANCHNAME
(wechselt automatisch in den Branch)

# Prework before push
/client
  npm run build
/root
 git add .  (oder nur git add einzelne files)
 git commit -m"blabla"

# push
git push

# aktuellen master ziehen
(aktuelle Änderungen im Branch sichern - commit oder stash)
git checkout master
git pull
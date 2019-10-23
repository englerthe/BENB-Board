# BENB-Board

create ".env" file with:

MONGODB_URI = mongodb://localhost/starter-app
PORT = 3000

# Prework installation
in the root directory:
npm install

in the subdirectory "client":
npm install

# Prework before push
git add .  (oder nur git add einzelne files)
/client
  npm run build
  git add build --f
/root
 git add .  (oder nur git add einzelne files)
 git commit -m"blabla"
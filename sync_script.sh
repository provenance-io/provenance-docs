#!/bin/bash

set -e -o pipefail

# Set the remote repository URL to clone from
REMOTE_REPO_URL="https://github.com/provenance-io/provenance.git"

# Store the current working directory in WORK_DIR
WORK_DIR=$(pwd)

# Remove any existing 'prov-sdk' directory and clone the remote repository
rm -rf ./prov-sdk
git clone "$REMOTE_REPO_URL" prov-sdk

# Read the versions from a JSON file and remove the 'v' prefix
VERSIONS=($(jq -r '.[]' versions.json))

VERSIONS+=("main")

# Iterate over each version
for version in "${VERSIONS[@]}"; do
  echo "$version"
  if [ "$version" == "main" ]; then
    branch="main"  # Set the branch to 'main'
    version_directory=""  # For 'main', the version directory is empty
  else
    version="${version#v}"  # Remove the 'v' prefix from the version number
    branch="release/v$version.x"  # Determine the branch name
    version_directory="version-$version"  # Create a directory name based on the version
  fi

  # Change to the 'prov-sdk' directory
  cd $WORK_DIR/prov-sdk

  # Fetch the branch from the remote repository and switch to it
  git fetch origin "$branch"
  git checkout "$branch"

  # Check if the branch exists in the remote repository
  if ! git show-ref --verify "refs/remotes/origin/$branch" &>/dev/null; then
    echo "Branch $branch does not exist in the remote repository."
    continue
  else
    echo "Branch $branch exists, continuing..."
  fi

  # build the docs
  cd $WORK_DIR/prov-sdk/docs
  for D in ../x/*; do
    echo "Processing ${D}"
    if [ -d "${D}" ]; then
      DIR_NAME=$(echo $D | awk -F/ '{print $NF}')
      MODDOC=sdk/$DIR_NAME
      rm -rf $MODDOC
      mkdir -p $MODDOC
      # ibchooks doesn't have a spec folder
      if [ -f "$D/README.md" ]; then
        cp -r $D/README.md $MODDOC/
      fi
      # The rest of the modules have a spec folder
      if [ -f "$D/spec/README.md" ]; then
        cp -r $D/spec/* $MODDOC/
      fi
    fi
  done

  # Add modules page list

  cat ../x/README.md | sed 's/\/spec\//\//g' > ./sdk/README.md
  echo -e "---\nsidebar_position: 0\n---\n\n$(cat ./sdk/README.md)" > ./sdk/README.md

  for folder in "sdk"; do
    if [ "$version" == "main" ]; then
      cp -r "$WORK_DIR/prov-sdk/docs/$folder" "$WORK_DIR/docs/"
    else
      cp -r "$WORK_DIR/prov-sdk/docs/$folder" "$WORK_DIR/versioned_docs/$version_directory/"
    fi
  done
  if [ "$version" == "main" ]; then
      cp -r "$WORK_DIR/prov-sdk/client/docs/swagger-ui/swagger.yaml" "$WORK_DIR/openapi/"
  fi
done



# Leave the 'prov-sdk' directory after processing
cd "$WORK_DIR"

# Remove the 'prov-sdk' directory if needed
rm -rf ./prov-sdk

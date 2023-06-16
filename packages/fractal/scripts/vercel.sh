#!/usr/bin/env bash

# shellcheck disable=SC2181

# Setup SSH keys to access GitHub repositories when building from Vercel.

# shellcheck disable=SC1090
source "$(dirname "$0")/../../../scripts/colors.sh"

mkdir -p "$HOME"/.ssh
touch "$HOME"/.ssh/config
chmod 600 "$HOME"/.ssh/config

echo """
Host github.com
  Hostname github.com
  IdentifyFile=$HOME/.ssh/id_freezer
""" >> ~/.ssh/config

echo "$FREEZER_DEPLOY_KEY" | base64 --decode --wrap=0 > "$HOME/.ssh/id_freezer"

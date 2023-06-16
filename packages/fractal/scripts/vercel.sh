#!/usr/bin/env bash

# shellcheck disable=SC2181

# Setup SSH keys to access GitHub repositories when building from Vercel.

# shellcheck disable=SC1090
source "$(dirname "$0")/../../../scripts/colors.sh"

echo -n "$(info "Creating SSH directory... ")"
mkdir -p "$HOME"/.ssh
bold_success "DONE"

echo -n "$(info "Creating SSH config file... ")"
touch "$HOME"/.ssh/config
chmod 600 "$HOME"/.ssh/config
bold_success "DONE"

echo "Host github.com
  Hostname github.com
  IdentifyFile=$HOME/.ssh/id_freezer" >> "$HOME"/.ssh/config

echo "${REVERSE}"
cat "$HOME"/.ssh/config
echo "${NORMAL}"

echo -n "$(info "Adding SSH key... ")"
echo "$FREEZER_DEPLOY_KEY" | base64 --decode --wrap=0 > "$HOME/.ssh/id_freezer"
bold_success "DONE"

echo -n "$(info "Cleaning up known hosts... ")"
ssh-keygen -R "github.com"
ssh-keyscan -H github.com >> "$HOME/.ssh/known_hosts"
bold_success "DONE"

#!/usr/bin/env bash

# shellcheck disable=SC2181

# Setup SSH keys to access GitHub repositories when building from Vercel.

# shellcheck disable=SC1090
source "$(dirname "$0")/../../../scripts/colors.sh"

echo -n "$(info "Updating Git config to enforce HTTPS to connected to Freezer... ")"
git config --global url."https://github.com/snowball-tech/freezer.git".insteadOf "git@github.com:snowball-tech/freezer.git"
bold_success "DONE"

echo -n "$(info "Updating GH_TOKEN... ")"
export GH_TOKEN="$SNOWBALL_BOT_TOKEN"
bold_success "DONE"

#!/bin/bash


# Googleが提供しているTypeScript用フォーマッターライブラリ
echo "Installing gts..."

if npm install --save-dev gts; then
  echo "Installed gts successfully!"
else 
  echo "Failed to install gts."
  exit 1
fi

echo "Initializing gts..."
if npx gts init; then
  echo "Initialized gts successfully!"
else
  echo "Failed to Initialize gts."
  exit 1
fi
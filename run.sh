#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the codebase
npx clasp login
npx clasp push --force
npx clasp open

set shell := ["bash", "-uc"]

default:
    just --list

install:
    pnpm install

dev:
    pnpm dev
build:
    pnpm build
lint:
    pnpm lint
check: lint build

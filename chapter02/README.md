# Chapter 2

In this chapter, we explored listing CVEs for a Docker image.

## Available Files

- [Dockerfile](Dockerfile): A simple Dockerfile for the `alpine-curl` image used in the book.
- [CVE-2022-37434.vex.json](CVE-2022-37434.vex.json): A VEX file for the CVE-2022-37434.

You can use the following command to check for CVEs in the `alpine:3.12` image but using the VEX file:

```bash
docker scout cves alpine:3.12 --vex-location .
```
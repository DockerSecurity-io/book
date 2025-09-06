FROM ubuntu:24.04

RUN apt-get update && apt-get install -y iputils-ping
   
CMD ["/bin/sh", "-c", "while true; do echo Hello World; sleep 1; done"]
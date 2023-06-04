FROM mcr.microsoft.com/mssql/server:2019-GA-ubuntu-16.04
COPY ./initscript.sql .
COPY ./entrypoint.sh .
EXPOSE 1433
CMD /bin/bash ./entrypoint.sh
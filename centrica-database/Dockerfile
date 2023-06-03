
# Use the SQL Server 2019 base image
FROM mcr.microsoft.com/mssql/server:2019-latest

# create directory within SQL container for database files
RUN mkdir -p /opt/mssql-scripts

# copy the database files from host to container
COPY initscript.sql /opt/mssql-scripts

# set environment variables
ENV ACCEPT_EULA=Y

# set the SA password as an environment variable
ENV SA_PASSWORD=${MSSQL_SA_PASSWORD}

EXPOSE 1434
# Set environment variables for SQL Server
RUN ( /opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" \
    && /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -i /opt/mssql-scripts/initscript.sql \
    && pkill sqlservr
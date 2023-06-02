#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/centrica.api/centrica.api.csproj", "src/centrica.api/"]
COPY ["src/centrica.datamodels/centrica.datamodels.csproj", "src/centrica.datamodels/"]
COPY ["src/centrica.services/centrica.services.csproj", "src/centrica.services/"]
COPY ["src/centrica.repository/centrica.repository.csproj", "src/centrica.repository/"]
COPY ["src/centrica.configurations/centrica.configurations.csproj", "src/centrica.configurations/"]
RUN dotnet restore "src/centrica.api/centrica.api.csproj"
COPY . .
WORKDIR "/src/src/centrica.api"
RUN dotnet build "centrica.api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "centrica.api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "centrica.api.dll"]
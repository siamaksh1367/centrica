#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["centrica.api/centrica.api.csproj", "centrica.api/"]
COPY ["centrica.datamodels/centrica.datamodels.csproj", "centrica.datamodels/"]
COPY ["centrica.serviceRegistration/centrica.serviceRegistration.csproj", "centrica.serviceRegistration/"]
COPY ["centrica.repository/centrica.repository.csproj", "centrica.repository/"]
COPY ["centrica.configurations/centrica.configurations.csproj", "centrica.configurations/"]
COPY ["centrica.services/centrica.services.csproj", "centrica.services/"]
RUN dotnet restore "centrica.api/centrica.api.csproj"
COPY . .
WORKDIR "/src/centrica.api"
RUN dotnet build "centrica.api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "centrica.api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "centrica.api.dll"]
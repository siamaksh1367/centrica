USE [master]
GO
/****** Object:  Database [Centrica]    Script Date: 6/2/2023 5:07:20 PM ******/
CREATE DATABASE [Centrica]
GO
USE [Centrica]
GO
/****** Object:  Table [dbo].[District]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[District](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_District] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DistrictSalePerson]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DistrictSalePerson](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SalePersonId] [int] NOT NULL,
	[DistrictId] [int] NOT NULL,
	[IsPrimary] [bit] NOT NULL,
 CONSTRAINT [PK_DistrictSalePerson] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductStoreSell]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductStoreSell](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[StoreId] [int] NOT NULL,
	[SalePersonProductId] [int] NOT NULL,
	[SellDate] [datetime2](7) NOT NULL,
	[Quantity] [float] NULL,
 CONSTRAINT [PK_ProductStoreSell] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalePerson]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalePerson](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_SalePerson] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalePersonProduct]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalePersonProduct](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SalePersonId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Available] [float] NULL,
 CONSTRAINT [PK_SalePersonProduct] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Store]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Store](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[DistrictId] [int] NOT NULL,
 CONSTRAINT [PK_Store] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TransitionPeriod]    Script Date: 6/2/2023 5:07:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransitionPeriod](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[IsValid] [bit] NOT NULL,
 CONSTRAINT [PK_TransitionPeriod] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DistrictSalePerson]  WITH CHECK ADD  CONSTRAINT [FK_DistrictSalePerson_District] FOREIGN KEY([DistrictId])
REFERENCES [dbo].[District] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DistrictSalePerson] CHECK CONSTRAINT [FK_DistrictSalePerson_District]
GO
ALTER TABLE [dbo].[DistrictSalePerson]  WITH CHECK ADD  CONSTRAINT [FK_DistrictSalePerson_SalePerson] FOREIGN KEY([SalePersonId])
REFERENCES [dbo].[SalePerson] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DistrictSalePerson] CHECK CONSTRAINT [FK_DistrictSalePerson_SalePerson]
GO
ALTER TABLE [dbo].[ProductStoreSell]  WITH CHECK ADD  CONSTRAINT [FK_ProductStoreSell_SalePersonProduct] FOREIGN KEY([SalePersonProductId])
REFERENCES [dbo].[SalePersonProduct] ([Id])
GO
ALTER TABLE [dbo].[ProductStoreSell] CHECK CONSTRAINT [FK_ProductStoreSell_SalePersonProduct]
GO
ALTER TABLE [dbo].[ProductStoreSell]  WITH CHECK ADD  CONSTRAINT [FK_ProductStoreSell_Store] FOREIGN KEY([StoreId])
REFERENCES [dbo].[Store] ([Id])
GO
ALTER TABLE [dbo].[ProductStoreSell] CHECK CONSTRAINT [FK_ProductStoreSell_Store]
GO
ALTER TABLE [dbo].[SalePersonProduct]  WITH CHECK ADD  CONSTRAINT [FK_SalePersonProduct_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[SalePersonProduct] CHECK CONSTRAINT [FK_SalePersonProduct_Product]
GO
ALTER TABLE [dbo].[SalePersonProduct]  WITH CHECK ADD  CONSTRAINT [FK_SalePersonProduct_SalePerson] FOREIGN KEY([SalePersonId])
REFERENCES [dbo].[SalePerson] ([Id])
GO
ALTER TABLE [dbo].[SalePersonProduct] CHECK CONSTRAINT [FK_SalePersonProduct_SalePerson]
GO
ALTER TABLE [dbo].[Store]  WITH CHECK ADD  CONSTRAINT [FK_Store_District] FOREIGN KEY([DistrictId])
REFERENCES [dbo].[District] ([Id])
GO
ALTER TABLE [dbo].[Store] CHECK CONSTRAINT [FK_Store_District]
GO
USE [master]
GO
ALTER DATABASE [Centrica] SET  READ_WRITE 
GO


INSERT INTO [dbo].[District] ([Name])VALUES('North Denmark')
INSERT INTO [dbo].[District] ([Name])VALUES('Southern Denmark')
GO

-- ========================
-- Script SQL Server: Estructura + Índices + Perfiles
-- ========================

-- Tabla Perfil
CREATE TABLE Perfil (
    PerfilID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(50) UNIQUE,
    Descripcion NVARCHAR(255)
);

-- Tabla Persona
CREATE TABLE Persona (
    PersonaID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(50),
    Apellido NVARCHAR(50),
    Correo NVARCHAR(100) UNIQUE,
    Telefono NVARCHAR(20),
    Direccion NVARCHAR(200)
);

-- Tabla Usuario
CREATE TABLE Usuario (
    UsuarioID INT IDENTITY(1,1) PRIMARY KEY,
    PersonaID INT NOT NULL,
    PerfilID INT NOT NULL,
    Username NVARCHAR(50) UNIQUE,
    PasswordHash NVARCHAR(256),
    Estado BIT,
    FechaCreacion DATETIME,
    CONSTRAINT FK_Usuario_Persona FOREIGN KEY (PersonaID) REFERENCES Persona(PersonaID),
    CONSTRAINT FK_Usuario_Perfil FOREIGN KEY (PerfilID) REFERENCES Perfil(PerfilID)
);

-- Tabla Producto
CREATE TABLE Producto (
    ProductoID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100),
    Descripcion NVARCHAR(255),
    Precio DECIMAL(10,2),
    Stock INT,
    Estado BIT,
    UsuarioID INT NOT NULL,
    CONSTRAINT FK_Producto_Usuario FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID)
);

-- ========================
-- Índices recomendados
-- ========================

-- FK Usuario.PersonaID
CREATE INDEX IX_Usuario_PersonaID ON Usuario(PersonaID);

-- FK Usuario.PerfilID
CREATE INDEX IX_Usuario_PerfilID ON Usuario(PerfilID);

-- FK Producto.UsuarioID
CREATE INDEX IX_Producto_UsuarioID ON Producto(UsuarioID);

-- Búsqueda por nombre de producto
CREATE INDEX IX_Producto_Nombre ON Producto(Nombre);

-- Búsqueda por estado de producto
CREATE INDEX IX_Producto_Estado ON Producto(Estado);

-- Búsqueda por estado de usuario
CREATE INDEX IX_Usuario_Estado ON Usuario(Estado);

-- Búsqueda por teléfono en persona
CREATE INDEX IX_Persona_Telefono ON Persona(Telefono);

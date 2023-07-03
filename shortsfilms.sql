-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2023 at 09:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shortfilms`
--

-- --------------------------------------------------------

--
-- Table structure for table `ator`
--

CREATE TABLE `ator` (
  `id_Ator` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ator_filmes`
--

CREATE TABLE `ator_filmes` (
  `id_Ator_Filmes` int(11) NOT NULL,
  `fk_Ator` int(11) NOT NULL,
  `fk_Filmes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `diretor`
--

CREATE TABLE `diretor` (
  `id_Diretor` int(11) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filmes`
--

CREATE TABLE `filmes` (
  `id_Filmes` int(11) NOT NULL,
  `fk_Diretor` int(11) NOT NULL,
  `fk_Trailer` int(11) NOT NULL,
  `Qualidade_Filme` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Ano de Lançamento` date NOT NULL,
  `Classificação Indicativa` int(11) NOT NULL,
  `Genero` varchar(50) NOT NULL,
  `Duracao` time NOT NULL,
  `Capa_Filme` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `historico_de_filmes`
--

CREATE TABLE `historico_de_filmes` (
  `id_Historico` int(11) NOT NULL,
  `fk_Perfil` int(11) NOT NULL,
  `fk_Filme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perfis`
--

CREATE TABLE `perfis` (
  `id_Perfis` int(11) NOT NULL,
  `fk_Usuario` int(11) NOT NULL,
  `Tipo_Usuario` varchar(50) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Foto` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `planos`
--

CREATE TABLE `planos` (
  `id_Plano` int(11) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Preco` float(10,2) NOT NULL,
  `Vantagens` varchar(100) NOT NULL,
  `Icons` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `planos`
--

INSERT INTO `planos` (`id_Plano`, `Nome`, `Preco`, `Vantagens`, `Icons`) VALUES
(1, 'Plano Silver', 1.00, 'muitas', '');

-- --------------------------------------------------------

--
-- Table structure for table `trailer`
--

CREATE TABLE `trailer` (
  `id_Trailer` int(11) NOT NULL,
  `Duracao` varchar(10) NOT NULL,
  `Qualidade_Trailer` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_Usuario` int(5) NOT NULL,
  `fk_Plano` int(11) NOT NULL,
  `Nome` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Senha` varchar(30) NOT NULL,
  `CPF` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ator`
--
ALTER TABLE `ator`
  ADD PRIMARY KEY (`id_Ator`);

--
-- Indexes for table `ator_filmes`
--
ALTER TABLE `ator_filmes`
  ADD PRIMARY KEY (`id_Ator_Filmes`),
  ADD KEY `Rel_Ator_filme` (`fk_Filmes`),
  ADD KEY `Rel_Filme_ator` (`fk_Ator`);

--
-- Indexes for table `diretor`
--
ALTER TABLE `diretor`
  ADD PRIMARY KEY (`id_Diretor`);

--
-- Indexes for table `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id_Filmes`),
  ADD KEY `fk_Diretor_filmes` (`fk_Diretor`),
  ADD KEY `fk_Previa_Filme_filmes` (`fk_Trailer`);

--
-- Indexes for table `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  ADD PRIMARY KEY (`id_Historico`),
  ADD KEY `fk_filmes_historico` (`fk_Filme`),
  ADD KEY `fk_perfil_perfis` (`fk_Perfil`);

--
-- Indexes for table `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id_Perfis`),
  ADD KEY `fk_usuário_perfis` (`fk_Usuario`);

--
-- Indexes for table `planos`
--
ALTER TABLE `planos`
  ADD PRIMARY KEY (`id_Plano`);

--
-- Indexes for table `trailer`
--
ALTER TABLE `trailer`
  ADD PRIMARY KEY (`id_Trailer`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_Usuario`),
  ADD KEY `fk_planos_usuario` (`fk_Plano`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ator`
--
ALTER TABLE `ator`
  MODIFY `id_Ator` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ator_filmes`
--
ALTER TABLE `ator_filmes`
  MODIFY `id_Ator_Filmes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diretor`
--
ALTER TABLE `diretor`
  MODIFY `id_Diretor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id_Filmes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  MODIFY `id_Historico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id_Perfis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `planos`
--
ALTER TABLE `planos`
  MODIFY `id_Plano` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trailer`
--
ALTER TABLE `trailer`
  MODIFY `id_Trailer` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_Usuario` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ator_filmes`
--
ALTER TABLE `ator_filmes`
  ADD CONSTRAINT `Rel_Ator_filme` FOREIGN KEY (`fk_Filmes`) REFERENCES `filmes` (`id_Filmes`),
  ADD CONSTRAINT `Rel_Filme_ator` FOREIGN KEY (`fk_Ator`) REFERENCES `ator` (`id_Ator`);

--
-- Constraints for table `filmes`
--
ALTER TABLE `filmes`
  ADD CONSTRAINT `Rel_Filme_diretor` FOREIGN KEY (`fk_Diretor`) REFERENCES `diretor` (`id_Diretor`),
  ADD CONSTRAINT `Rel_Filme_treiler` FOREIGN KEY (`fk_Trailer`) REFERENCES `trailer` (`id_Trailer`);

--
-- Constraints for table `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  ADD CONSTRAINT `Rel_filme_perfis` FOREIGN KEY (`fk_Perfil`) REFERENCES `perfis` (`id_Perfis`),
  ADD CONSTRAINT `Rel_perfil_filme` FOREIGN KEY (`fk_Filme`) REFERENCES `filmes` (`id_Filmes`);

--
-- Constraints for table `perfis`
--
ALTER TABLE `perfis`
  ADD CONSTRAINT `Rel_Perfis_usuario` FOREIGN KEY (`fk_Usuario`) REFERENCES `usuario` (`id_Usuario`);

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `Rel_Usuario_plano` FOREIGN KEY (`fk_Plano`) REFERENCES `planos` (`id_Plano`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

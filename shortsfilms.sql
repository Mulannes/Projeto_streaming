-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Jun-2023 às 13:19
-- Versão do servidor: 8.0.21
-- versão do PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `shortfilms`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `ator`
--

CREATE TABLE `ator` (
  `id_Ator` int NOT NULL,
  `Nome` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ator_filmes`
--

CREATE TABLE `ator_filmes` (
  `id_Ator_Filmes` int NOT NULL,
  `fk_Ator` int NOT NULL,
  `fk_Filmes` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `diretor`
--

CREATE TABLE `diretor` (
  `id_Diretor` int NOT NULL,
  `Nome` varchar(200) NOT NULL,
  `Tipo` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `id_Filmes` int NOT NULL,
  `fk_Diretor` int NOT NULL,
  `fk_Trailer` int NOT NULL,
  `Qualidade_Filme` int NOT NULL,
  `Nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Ano de Lançamento` date NOT NULL,
  `Classificação Indicativa` int NOT NULL,
  `Genero` varchar(300) NOT NULL,
  `Duracao` time NOT NULL,
  `Capa_Filme` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `historico_de_filmes`
--

CREATE TABLE `historico_de_filmes` (
  `id_Historico` int NOT NULL,
  `fk_Perfil` int NOT NULL,
  `fk_Filme` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfis`
--

CREATE TABLE `perfis` (
  `id_Perfis` int NOT NULL,
  `fk_Usuario` int NOT NULL,
  `Tipo_Usuario` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Foto` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `planos`
--

CREATE TABLE `planos` (
  `id_Plano` int NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Preco` float(10,2) NOT NULL,
  `Vantagens` varchar(100) NOT NULL,
  `Icons` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `trailer`
--

CREATE TABLE `trailer` (
  `id_Trailer` int NOT NULL,
  `Duracao` int NOT NULL,
  `Qualidade_Trailer` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_Usuario` int NOT NULL,
  `fk_Plano` int NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Email` int NOT NULL,
  `Senha` int NOT NULL,
  `CPF` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `ator`
--
ALTER TABLE `ator`
  ADD PRIMARY KEY (`id_Ator`);

--
-- Índices para tabela `ator_filmes`
--
ALTER TABLE `ator_filmes`
  ADD PRIMARY KEY (`id_Ator_Filmes`),
  ADD KEY `Rel_Ator_filme` (`fk_Filmes`),
  ADD KEY `Rel_Filme_ator` (`fk_Ator`);

--
-- Índices para tabela `diretor`
--
ALTER TABLE `diretor`
  ADD PRIMARY KEY (`id_Diretor`);

--
-- Índices para tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id_Filmes`),
  ADD KEY `fk_Diretor_filmes` (`fk_Diretor`),
  ADD KEY `fk_Previa_Filme_filmes` (`fk_Trailer`);

--
-- Índices para tabela `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  ADD PRIMARY KEY (`id_Historico`),
  ADD KEY `fk_filmes_historico` (`fk_Filme`),
  ADD KEY `fk_perfil_perfis` (`fk_Perfil`);

--
-- Índices para tabela `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id_Perfis`),
  ADD KEY `fk_usuário_perfis` (`fk_Usuario`);

--
-- Índices para tabela `planos`
--
ALTER TABLE `planos`
  ADD PRIMARY KEY (`id_Plano`);

--
-- Índices para tabela `trailer`
--
ALTER TABLE `trailer`
  ADD PRIMARY KEY (`id_Trailer`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_Usuario`),
  ADD KEY `fk_planos_usuario` (`fk_Plano`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ator`
--
ALTER TABLE `ator`
  MODIFY `id_Ator` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ator_filmes`
--
ALTER TABLE `ator_filmes`
  MODIFY `id_Ator_Filmes` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `diretor`
--
ALTER TABLE `diretor`
  MODIFY `id_Diretor` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id_Filmes` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  MODIFY `id_Historico` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id_Perfis` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `planos`
--
ALTER TABLE `planos`
  MODIFY `id_Plano` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `trailer`
--
ALTER TABLE `trailer`
  MODIFY `id_Trailer` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_Usuario` int NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `ator_filmes`
--
ALTER TABLE `ator_filmes`
  ADD CONSTRAINT `Rel_Ator_filme` FOREIGN KEY (`fk_Filmes`) REFERENCES `filmes` (`id_Filmes`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Rel_Filme_ator` FOREIGN KEY (`fk_Ator`) REFERENCES `ator` (`id_Ator`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `filmes`
--
ALTER TABLE `filmes`
  ADD CONSTRAINT `Rel_Filme_diretor` FOREIGN KEY (`fk_Diretor`) REFERENCES `diretor` (`id_Diretor`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Rel_Filme_treiler` FOREIGN KEY (`fk_Trailer`) REFERENCES `trailer` (`id_Trailer`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `historico_de_filmes`
--
ALTER TABLE `historico_de_filmes`
  ADD CONSTRAINT `Rel_filme_perfis` FOREIGN KEY (`fk_Perfil`) REFERENCES `perfis` (`id_Perfis`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Rel_perfil_filme` FOREIGN KEY (`fk_Filme`) REFERENCES `filmes` (`id_Filmes`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `perfis`
--
ALTER TABLE `perfis`
  ADD CONSTRAINT `Rel_Perfis_usuario` FOREIGN KEY (`fk_Usuario`) REFERENCES `usuario` (`id_Usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `Rel_Usuario_plano` FOREIGN KEY (`fk_Plano`) REFERENCES `planos` (`id_Plano`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

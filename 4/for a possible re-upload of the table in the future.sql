-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Июн 16 2022 г., 01:10
-- Версия сервера: 5.7.38-cll-lve
-- Версия PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `link2sit_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user3`
--

CREATE TABLE `user3` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `comments` text NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user3`
--

INSERT INTO `user3` (`id`, `first_name`, `last_name`, `email`, `phone`, `comments`, `status`) VALUES
(2, 'Amanda13', 'an13@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(7, 'Amanda8', 'an85737fqw@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(9, 'Amanda6', 'an6375@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(10, 'Amanda5', 'ankll5wfq@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(11, 'Amanda4', 'an4@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(12, 'Amanda3', 'an3fqw@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(13, 'Amanda2', 'an2fqw@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(14, 'Amanda1', 'an1sfd@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(15, 'Amanda0', 'an0sfhf@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked'),
(16, 'Amanda34', 'an34fge@ufc.com', '05.05.2022', '05.05.2022', '', 'blocked');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user3`
--
ALTER TABLE `user3`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user3`
--
ALTER TABLE `user3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

use prestamos_db;

--  Se inserta nueva columna de saldo a favor
ALTER TABLE `Payment` ADD `positiveBalance` DECIMAL(15,2) NOT NULL COMMENT 'Saldo a favor' AFTER `currentDebt`;
INSERT INTO `Customer` (`idCustomer`, `customer_type`, `numIdent`, `custName`,`custLastName`, `cellPhone`, `phone`, `phoneTwo`, `address`, `email`, `registerDate`, `registerBy`, `active`) VALUES
(1, 1, '1094928002', 'Juan David', 'Davila Mejia', '3017972001', '', NULL, 'Cra 25 # 41B Sur - 37, Apto 1002', 'juan23davila@gmail.com', '2021-01-10 13:11:23', NULL, 'Y'),
(2, 1, '29200111', 'Yaneth', 'Mejia Chica', '3154069867', '(6)7440993', NULL, 'Cra 19 # 36N - 38, Torre Alameda, Apto 1308', NULL, '2021-01-10 13:27:16', NULL, 'Y'),
(3, 1, '1041327672', 'Mardory', 'Hincapie Vergara', '3104277017', NULL, NULL, 'Avenida Carvajal # 31 - 28 municipio San Vicente', NULL, '2021-01-10 21:19:24', NULL, 'Y'),
(4, 1, '1950239221', 'Juan Pablo', 'Gonzales', '3104063221', NULL, NULL, NULL, NULL, '2021-01-16 07:21:37', NULL, 'Y'),
(5, 1, '234', 'Jhon Fredy', 'Ascencio', '3008900015', NULL, NULL, 'Ciudad Pacifica', NULL, '2021-01-16 07:23:55', NULL, 'Y'),
(6, 1, '13422', 'Jhonny', 'Jimenez', '5555', '4444', '3333', 'Belencito', 'hi@klas.com', '2021-01-17 09:12:26', NULL, 'Y'),
(7, 1, '4563425', 'Pedro', 'Navaja', '3129381', '02183', NULL, 'Calle la mejadls 282178 dalk', NULL, '2021-01-17 09:13:02', NULL, 'Y'),
(8, 1, '41330330', 'Luz Ensueño', 'Pinzon', '3154069898', '7440939', NULL, 'Barrio 8 de Marzo Mz9 # 7', 'luzPinzon1960@hotmail.com', '2021-01-31 08:37:58', NULL, 'Y'),
(9, 1, '16547825', 'Glautier', 'Davila', '3155479752', '7413117', NULL, 'calle 22  # 13 33', 'glautier@hotmail.com', '2021-01-31 15:02:33', NULL, 'Y');


INSERT INTO `Loan` (`idLoan`, `custId`, `valueIni`, `valueNow`, `payUntil`, `idLoanType`, `prePayment`, `date`, `percentage`) VALUES
(1, 1, '5000000.00', '5000000.00', '2021-02-28 18:07:19', 1, 'Y', '2021-01-31 18:07:19', '4.50');

/* Dashboard Crust Itália · V26 GitHub Sync
   Base oficial: BRM-MDL-SQ-SGI-033 Rev.23.
   Objetivo: consulta + atualização operacional centralizada via GitHub API. */
const BASE_DB = {"documento":{"titulo":"Especificações Técnica Crust Itália","codigo":"BRM-MDL-SQ-SGI-033","revisao":"23","origem":"Planilha matriz enviada","geradoEm":"2026-06-25 00:00","responsavelAplicacao":"Qualidade / Desenvolvimento de Produto e Processo","alertaConfidencialidade":"Dados técnicos industriais; avaliar publicação em repositório privado antes de compartilhar.","versaoAplicacao":"V26 GitHub Sync"},"kpis":{"artigos":19,"clientes":8,"trs":7,"receitas":3,"fornecedoresAprovados":34,"fornecedoresEmTeste":1,"ultimaRevisao":"23","dataUltimaRevisao":"2026-02-02"},"artigos":[{"id":"sella-ray-wb-brazil","artigo":"SELLA RAY WB BRAZIL","tr":"22","cor":"PRETO","codigoCor":"311","cliente":"RMG","yield":"-9","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA DIVIDIR 12/13","caracteristicasFinais":"(PIENO FIORE / (DIVIDIDO 12/13) CLASSIFICADO","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA DIVIDIR 12/13"],"pontosCriticos":["(PIENO FIORE / (DIVIDIDO 12/13) CLASSIFICADO"],"fornecedores":{"TYSON":"Aprovado","JBS":"Aprovado"},"tags":["RMG","TR 22","MARIO","Yield -9"],"possuiParametrosMaquina":false},{"id":"volante-premium-wb-usa-hns-bbs-beef-tyson","artigo":"VOLANTE PREMIUM\n(WB USA HNS/BBS) (BEEF /TYSON)","tr":"33","cor":"(LOLITA/NIRVANA) PRETO","codigoCor":"311","cliente":"RMG / MÉXICO","yield":"-9","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCAR / LIXAR / CLASSIFICAR","caracteristicasFinais":"LIXADO 320/400 OU 500 / CLASSIFICA SEM MARCA CENTRAL\n(MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","ESTUCAR","LIXAR","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCAR / LIXAR / CLASSIFICAR","LIXADO 320/400 OU 500 / CLASSIFICA SEM MARCA CENTRAL","(MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA)"],"fornecedores":{"BEEF / LAMIPEL":"Aprovado"},"tags":["RMG / MÉXICO","TR 33","MARIO","Yield -9"],"possuiParametrosMaquina":false},{"id":"volante-premium-imperial","artigo":"VOLANTE PREMIUM (IMPERIAL)","tr":"33","cor":"NATURAL GEE\nCRYSATL GREY\nWARM HORIZON\nHOT CHOCOLATE\nSPACE GREY\nDARK AEGEAN\nDK SPACE GRAY","codigoCor":"7738\n7741\n03292\n03300\n7733\n7735\n7723","cliente":"MÉXICO","yield":"-9,5","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12,/13/ ESTUCAR / LIXAR / CLASSIFICAR","caracteristicasFinais":"LIXADO 320/400 OU 500 / CLASSIFICA SEM MARCA CENTRAL\n(MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12,","13","ESTUCAR","LIXAR","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12,/13/ ESTUCAR / LIXAR / CLASSIFICAR","LIXADO 320/400 OU 500 / CLASSIFICA SEM MARCA CENTRAL","(MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA)"],"fornecedores":{"BEEF / LAMIPEL":"Aprovado"},"tags":["MÉXICO","TR 33","MARIO","Yield -9,5"],"possuiParametrosMaquina":false},{"id":"palladio-meridian","artigo":"PALLADIO/\nMERIDIAN","tr":"44","cor":"PRETO\n/CINZA\n/BEIGE","codigoCor":"311\n3705\n395\n5245","cliente":"AFX","yield":"-5","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"BAUCE / TOOGLING","caracteristicasFinais":"-","fluxoPassos":["BAUCE","TOOGLING"],"pontosCriticos":["BAUCE / TOOGLING"],"fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"},"tags":["AFX","TR 44","MARIO","Yield -5"],"possuiParametrosMaquina":false},{"id":"volante-julia-wb-brazil","artigo":"VOLANTE JULIA WB BRAZIL","tr":"33","cor":"PRETO/MARROM/CINZA/","codigoCor":"311/\n737\n309\n645\n7363\n8713","cliente":"AUTOLIV","yield":"-9.5","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / LIXAR / FULLÃO / TOOGING / CLASSIFICAR","caracteristicasFinais":"CLASSIFICADO (CLASS. A E B MONTADO NO MESMO PALLET)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","LIXAR","FULLÃO","TOOGING","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / LIXAR / FULLÃO / TOOGING / CLASSIFICAR","CLASSIFICADO (CLASS"],"fornecedores":{"SMX":"Aprovado","JANGADA":"Reprov.","APUCA":"Aprovado","NAUSSA":"Reprov.","CCO":"Aprovado","CENCOPROD":"Aprovado","BEEF / LAMIPEL":"Aprovado","TYSON":"Aprovado","SCHNEIDER":"Aprovado","JBS":"Aprovado","MINERVA":"EM TESTE\n1. 10 PELES AGUARDANDO \n2. 300 PELES AGUARDANDO"},"tags":["AUTOLIV","TR 33","MARIO","Yield -9.5"],"possuiParametrosMaquina":false},{"id":"volante-julia-wb-brazil","artigo":"VOLANTE JULIA WB BRAZIL","tr":"33","cor":"PRETO (BACKEN BLACK)","codigoCor":"07700","cliente":"MÉXICO BRUSACOSCO","yield":"-9.5","espessuraDivisora":"1,2 / 1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / LIXAR / FULÃO / TOOGING / CLASSIFICAR","caracteristicasFinais":"CLASSIFICADO (CLASS. A E B MONTADO NO MESMO PALLET)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","LIXAR","FULÃO","TOOGING","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / LIXAR / FULÃO / TOOGING / CLASSIFICAR","CLASSIFICADO (CLASS"],"fornecedores":{"SMX":"Aprovado","JANGADA":"Reprov.","APUCA":"Aprovado","NAUSSA":"Reprov.","CCO":"Aprovado","CENCOPROD":"Aprovado","BEEF / LAMIPEL":"Aprovado","TYSON":"Aprovado","SCHNEIDER":"Aprovado","JBS":"Aprovado","MINERVA":"EM TESTE\n1. 10 PELES AGUARDANDO \n2. 300 PELES AGUARDANDO"},"tags":["MÉXICO BRUSACOSCO","TR 33","MARIO","Yield -9.5"],"possuiParametrosMaquina":false},{"id":"volante-standart-wb-brazil","artigo":"VOLANTE STANDART WB BRAZIL","tr":"33","cor":"PRETO","codigoCor":"311","cliente":"RMG","yield":"-7","espessuraDivisora":"1,3 /1,4","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 13/14 / ESTUCAR / LIXAR / FULONAR / TOOGLING","caracteristicasFinais":"TOOGLING 8CM / CLASSIFICADO (CLASS. A E B MONTADO NO MESMO PALLET)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 13/14","ESTUCAR","LIXAR","FULONAR","TOOGLING"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 13/14 / ESTUCAR / LIXAR / FULONAR / TOOGLING","TOOGLING 8CM / CLASSIFICADO (CLASS"],"fornecedores":{"SMX":"Aprovado","NAUSSA":"Reprov.","TYSON":"Aprovado","JBS":"Aprovado"},"tags":["RMG","TR 33","MARIO","Yield -7"],"possuiParametrosMaquina":false},{"id":"volante-roto-wb-brazil","artigo":"VOLANTE ROTO WB BRAZIL","tr":"33","cor":"PRETO","codigoCor":"311","cliente":"RMG","yield":"-7","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 /ESTUCA /  LIXAR / FULÃO / TOOGING / CLASSIFICAR","caracteristicasFinais":"TOOGLING 8CM / CLASSIFICADO (CLASS. A E B MONTADO NO MESMO PALLET)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","ESTUCA","LIXAR","FULÃO","TOOGING","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 /ESTUCA /  LIXAR / FULÃO / TOOGING / CLASSIFICAR","TOOGLING 8CM / CLASSIFICADO (CLASS"],"fornecedores":{"BEEF / LAMIPEL":"Aprovado"},"tags":["RMG","TR 33","MARIO","Yield -7"],"possuiParametrosMaquina":false},{"id":"arianna-wb-brazil-ice","artigo":"ARIANNA WB BRAZIL - ICE","tr":"33/44\n(MONTE)","cor":"MARROM\nT-MORO\nBEIGE\nMARRONE CHIARO\nNERO(PRETO)\nGRIGIO (CINZA)\nROSSO(VERMELHO)\nROSSO ( FONDO CAMPEONE)","codigoCor":"3040\n3060\n2010\n3050\n311\n7010\n6010\n6020","cliente":"ICE","yield":"+2","espessuraDivisora":"1,1/1,2","receitaRecurtimento":"ARIANNA","fluxoSecagem":"RETORSA/VÁCUO /  AÉREO/MOLISSA / REFILA /\nDIVIDIR 12/13/\nESTUCO / LIXA / TOOGLING / CLASSIFICAR","caracteristicasFinais":"EXPANSSÃO TOOGLING 6-8CM\nREBAIXADO WET BLUE 1,1 / 1,2\nMOLISSA VELOCIDADE 8MTS / 5,5,6,6 OU 6,6,7,7\nCONTROLAR BEM A MACIEZ ( MIN 3.5 )\nEMBALAGEM 300-320 PELES NO MÁXIMO POR PALLET\nRESTRIÇÃO TAMANHO MÁX 55FT²","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","ESTUCO","LIXA","TOOGLING","CLASSIFICAR"],"pontosCriticos":["ESTUCO / LIXA / TOOGLING / CLASSIFICAR","EXPANSSÃO TOOGLING 6-8CM","CONTROLAR BEM A MACIEZ ( MIN 3","EMBALAGEM 300-320 PELES NO MÁXIMO POR PALLET","RESTRIÇÃO TAMANHO MÁX 55FT²"],"fornecedores":{"SMX":"Aprovado","CENCOPROD":"Aprovado","JBS":"Aprovado"},"tags":["ICE","TR 33/44\n(MONTE)","ARIANNA","Yield +2"],"possuiParametrosMaquina":true},{"id":"f6-wb-brazil-ice","artigo":"F6 WB BRAZIL - ICE","tr":"22","cor":"BEIGE\nMARRONE CHIARO\nNERO(PRETO)\nGRIGIO (CINZA)\nROSSO ( FONDO CAMPEONE)","codigoCor":"2010\n3050\n311\n7010\n6020","cliente":"ICE","yield":"+2","espessuraDivisora":"1,1/1,2","receitaRecurtimento":"ARIANNA","fluxoSecagem":"RETORSA/VÁCUO /  AÉREO/MOLISSA / REFILA /ESTUCO / LIXA / TOOGLING / CLASSIFICAR","caracteristicasFinais":"EXPANSSÃO TOOGLING 6-8CM\nREBAIXADO WET BLUE 1,1 / 1,2\nMOLISSA VELOCIDADE 8MTS / 5,5,6,6 OU 6,6,7,7\nCONTROLAR BEM A MACIEZ ( MIN 3.5 )\nEMBALAGEM 300-320 PELES NO MÁXIMO POR PALLET\nRESTRIÇÃO TAMANHO MÁX 55FT²","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","ESTUCO","LIXA","TOOGLING","CLASSIFICAR"],"pontosCriticos":["RETORSA/VÁCUO /  AÉREO/MOLISSA / REFILA /ESTUCO / LIXA / TOOGLING / CLASSIFICAR","EXPANSSÃO TOOGLING 6-8CM","CONTROLAR BEM A MACIEZ ( MIN 3","EMBALAGEM 300-320 PELES NO MÁXIMO POR PALLET","RESTRIÇÃO TAMANHO MÁX 55FT²"],"fornecedores":{},"tags":["ICE","TR 22","ARIANNA","Yield +2"],"possuiParametrosMaquina":true},{"id":"arianna-omega-leather","artigo":"ARIANNA -ÔMEGA LEATHER","tr":"33","cor":"PRETO","codigoCor":"311","cliente":"ÔMEGA LEATHER","yield":"+2","espessuraDivisora":"1,1/1,2","receitaRecurtimento":"ARIANNA","fluxoSecagem":"RETORSA/VÁCUO /  AÉREO/MOLISSA / REFILA / ESTUCO / LIXA / TOOGLING / CLASSIFICAR","caracteristicasFinais":"EXPANSSÃO TOOGLING 6-8CM\nREBAIXADO WET BLUE 1,2 / 1,3\nCONTROLAR BEM A MACIEZ CRUT 3,5 MIN\nRESTRIÇÃO DE ATÉ 3  MARCA DE FOGO","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","ESTUCO","LIXA","TOOGLING","CLASSIFICAR"],"pontosCriticos":["RETORSA/VÁCUO /  AÉREO/MOLISSA / REFILA / ESTUCO / LIXA / TOOGLING / CLASSIFICAR","EXPANSSÃO TOOGLING 6-8CM","CONTROLAR BEM A MACIEZ CRUT 3,5 MIN","RESTRIÇÃO DE ATÉ 3  MARCA DE FOGO"],"fornecedores":{"SMX":"Aprovado","CENCOPROD":"Aprovado","JBS":"Aprovado"},"tags":["ÔMEGA LEATHER","TR 33","ARIANNA","Yield +2"],"possuiParametrosMaquina":true},{"id":"mulan","artigo":"MULAN","tr":"TR22","cor":"NERO\nBRANDY","codigoCor":"311\n3010","cliente":"RMG","yield":"+2","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"ARIANNA","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 /CLASSIFICAR","caracteristicasFinais":"PIENO FIORE\nREBAIXADO WET BLUE 1,1 / 1,2\nMOLISSA VELOCIDADE 8MTS / 5,5,6,6 OU 6,6,7,7\n(CONTROLAR BEM A MACIEZ  CRUST 3.5 MIN)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 1,2","1,3","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 /CLASSIFICAR","(CONTROLAR BEM A MACIEZ  CRUST 3"],"fornecedores":{},"tags":["RMG","TR TR22","ARIANNA","Yield +2"],"possuiParametrosMaquina":true},{"id":"forge","artigo":"FORGE","tr":"TR33","cor":"NERO\nGREY(CINZA)\nBEIGE","codigoCor":"311\n6770\n4255","cliente":"RMG","yield":"+2","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"ARIANNA","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 / CLASSIFICAR","caracteristicasFinais":"PIENO FIORE\nREBAIXADO WET BLUE 1,1 / 1,2\nMOLISSA VELOCIDADE 8MTS / 5,5,6,6 OU 6,6,7,7\n(CONTROLAR BEM A MACIEZ  CRUST 3.5 MIN)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 1,2","1,3","CLASSIFICAR"],"pontosCriticos":["RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 / CLASSIFICAR","(CONTROLAR BEM A MACIEZ  CRUST 3"],"fornecedores":{},"tags":["RMG","TR TR33","ARIANNA","Yield +2"],"possuiParametrosMaquina":true},{"id":"moritz-wb-brazil","artigo":"MORITZ WB BRAZIL","tr":"44","cor":"PRETO\nMARROM\nBLOND","codigoCor":"311\n3020\n5270","cliente":"RMG","yield":"+2","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA/VÁCUO / TOOGLING 5CM / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCO / LIXA","caracteristicasFinais":"RESTRIÇÃO DE TAMANHO (MÍNIMO 4MT²);\nREBAIXADO WET BLUE 1,2 / 1,3","fluxoPassos":["RETORSA","VÁCUO","TOOGLING 5CM","MOLISSA","REFILA","DIVIDIR 12/13","ESTUCO","LIXA"],"pontosCriticos":["RETORSA/VÁCUO / TOOGLING 5CM / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCO / LIXA","RESTRIÇÃO DE TAMANHO (MÍNIMO 4MT²)"],"fornecedores":{"SMX":"Aprovado","JBS":"Aprovado"},"tags":["RMG","TR 44","MARIO","Yield +2"],"possuiParametrosMaquina":false},{"id":"sella-dk-obsoleto","artigo":"SELLA DK (OBSOLETO)","tr":"44","cor":"PRETO","codigoCor":"","cliente":"","yield":"-9","espessuraDivisora":"1,2/1,3 (-)","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO / AEREO/ MOLISSA /REFILA","caracteristicasFinais":"Tamanho M² entre 4,0 e 5,1","fluxoPassos":["RETORSA","VÁCUO","AEREO","MOLISSA","REFILA"],"pontosCriticos":[],"fornecedores":{"SMX":"Aprovado","APUCA":"Aprovado","JBS":"Aprovado"},"tags":["TR 44","MARIO","Yield -9"],"possuiParametrosMaquina":false},{"id":"ginevra-dk","artigo":"GINEVRA DK","tr":"34","cor":"PRETO\nBEGE","codigoCor":"311\n2367","cliente":"RMG","yield":"","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO / ÁEREO / MOLISA / REFILA /  DIVISORA / ESTUCO / LIXA","caracteristicasFinais":"TAMANHO M² ENTRE 4,0 E 5,1","fluxoPassos":["RETORSA","VÁCUO","ÁEREO","MOLISA","REFILA","DIVISORA","ESTUCO","LIXA"],"pontosCriticos":["RETORSA / VÁCUO / ÁEREO / MOLISA / REFILA /  DIVISORA / ESTUCO / LIXA"],"fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"},"tags":["RMG","TR 34","MARIO"],"possuiParametrosMaquina":false},{"id":"ginevra-wb-brazil","artigo":"GINEVRA WB BRAZIL","tr":"44","cor":"PRETO","codigoCor":"311","cliente":"RMG","yield":"-9","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO / AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCAR / LIXAR","caracteristicasFinais":"METRAGEM MÍNIMA M² 4,0\nDIVIDIDO /ESTUCO/ LIXADO","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 12/13","ESTUCAR","LIXAR"],"pontosCriticos":["RETORSA / VÁCUO / AÉREO / MOLISSA / REFILA / DIVIDIR 12/13 / ESTUCAR / LIXAR","METRAGEM MÍNIMA M² 4,0","DIVIDIDO /ESTUCO/ LIXADO"],"fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"},"tags":["RMG","TR 44","MARIO","Yield -9"],"possuiParametrosMaquina":false},{"id":"ares-wb-brazil-jbs","artigo":"ARES (WB BRAZIL/JBS )","tr":"33","cor":"CINNAMON BROWN","codigoCor":"3030","cliente":"RMG","yield":"-9","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO COM MAIS ENGRAXE","fluxoSecagem":"RETORSA / VÁCUO /  AÉREO / MOLISSA / REFILAR\nDIVIDIR 12/13","caracteristicasFinais":"PIENO FIORE / (DIVIDIDO 12/13) CLASSIFICADO","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILAR","DIVIDIR 12/13"],"pontosCriticos":["PIENO FIORE / (DIVIDIDO 12/13) CLASSIFICADO"],"fornecedores":{"JBS":"Aprovado"},"tags":["RMG","TR 33","MARIO COM MAIS ENGRAXE","Yield -9"],"possuiParametrosMaquina":false},{"id":"volante-lione","artigo":"VOLANTE LIONE","tr":"33","cor":"PRETO","codigoCor":"311","cliente":"MÉXICO","yield":"-9.5","espessuraDivisora":"1,2/1,3","receitaRecurtimento":"MARIO","fluxoSecagem":"RETORSA / VÁCUO / AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 / FULÃO DE BATER / MOLISSA /CLASSIFICA / ESTUCO / LIXA / CLASSIFICA","caracteristicasFinais":"CLASSIFICA SEM MARCA CENTRAL ( MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA).MOLISSA VELOCIDADE 8MTS  PRESSÃO. 4,4,4,4.\n (CONTROLAR BEM A MACIEZ CRUST 3,2 / 3,8)","fluxoPassos":["RETORSA","VÁCUO","AÉREO","MOLISSA","REFILA","DIVIDIR 1,2","1,3","FULÃO DE BATER","MOLISSA","CLASSIFICA","ESTUCO","LIXA","CLASSIFICA"],"pontosCriticos":["RETORSA / VÁCUO / AÉREO / MOLISSA / REFILA / DIVIDIR 1,2/1,3 / FULÃO DE BATER / MOLISSA /CLASSIFICA / ESTUCO / LIXA / CLASSIFICA","CLASSIFICA SEM MARCA CENTRAL ( MÁXIMO 1 MARCA DE FOGO PEQUENA NA ÁREA DA CULATRA)","(CONTROLAR BEM A MACIEZ CRUST 3,2 / 3,8)"],"fornecedores":{"BEEF / LAMIPEL":"Aprovado"},"tags":["MÉXICO","TR 33","MARIO","Yield -9.5"],"possuiParametrosMaquina":false}],"fornecedoresCodigo":[{"codigo":"001","fornecedor":"SMX"},{"codigo":"002","fornecedor":"JANGADA"},{"codigo":"003","fornecedor":"APUCA"},{"codigo":"004","fornecedor":"NAUSSA"},{"codigo":"005","fornecedor":"CCO"},{"codigo":"006","fornecedor":"CENCOPROD"},{"codigo":"007","fornecedor":"NAT.BEEF / LAMIPEL"},{"codigo":"008","fornecedor":"TAYSON"},{"codigo":"009","fornecedor":"MAFRIG"},{"codigo":"010","fornecedor":"SCHINEIDER"},{"codigo":"011","fornecedor":"JBS"}],"fornecedoresMatriz":[{"artigo":"SELLA RAY","fornecedores":{"TYSON":"Aprovado","JBS":"Aprovado"}},{"artigo":"VOLANTE PREMIUM","fornecedores":{"BEEF / LAMIPEL":"Aprovado"}},{"artigo":"PALLADIO/ MERIDIAN","fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"}},{"artigo":"VOLANTE JULIA","fornecedores":{"SMX":"Aprovado","JANGADA":"Reprov.","APUCA":"Aprovado","NAUSSA":"Reprov.","CCO":"Aprovado","CENCOPROD":"Aprovado","BEEF / LAMIPEL":"Aprovado","TYSON":"Aprovado","SCHNEIDER":"Aprovado","JBS":"Aprovado","MINERVA":"EM TESTE\n1. 10 PELES AGUARDANDO \n2. 300 PELES AGUARDANDO"}},{"artigo":"VOLANTE STANDART","fornecedores":{"SMX":"Aprovado","NAUSSA":"Reprov.","TYSON":"Aprovado","JBS":"Aprovado"}},{"artigo":"MORITZ","fornecedores":{"SMX":"Aprovado","JBS":"Aprovado"}},{"artigo":"SELLA DK","fornecedores":{"SMX":"Aprovado","APUCA":"Aprovado","JBS":"Aprovado"}},{"artigo":"GINEVRA DK","fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"}},{"artigo":"GINEVRA","fornecedores":{"SMX":"Aprovado","CCO":"Aprovado","JBS":"Aprovado"}},{"artigo":"ARIANNA","fornecedores":{"SMX":"Aprovado","CENCOPROD":"Aprovado","JBS":"Aprovado"}},{"artigo":"AURORA","fornecedores":{"CENCOPROD":"Aprovado","JBS":"Aprovado"}},{"artigo":"ARES","fornecedores":{"JBS":"Aprovado"}}],"parametrosMaquinaArianna":[{"processo":"Retorsa","parametros":["Pressão 45","Velocidade do Rolo 26","1ª Passagens: Cabeça\n2ª Passagem : Barriga\n3ª Passagem  Barriga"],"observacao":""},{"processo":"Vácuo","parametros":["Temperatura 50ºC","Tempo de Processo : (300-350) Segundos","Controle de Umidade da pele: Máximo 35"],"observacao":""},{"processo":"THEMA","parametros":["Temperatura 42ºC","Tempo de Processo : (840) Minutos","Controle de Umidade da pele:  10","Obs: Não é necessário tempo de repouso para o processo seguinte (Molissa)"],"observacao":"Obs: Não é necessário tempo de repouso para o processo seguinte (Molissa)"},{"processo":"Molissa","parametros":["Pressão (7/7/7/7)","Velocidade do tapete 6mts","Maciez minimo: 3,5","Obs: Passar 2 peles por vez;\nObs: Analisar maciez depois do toogling, passar na Molissa novamente"],"observacao":"Obs: Passar 2 peles por vez;\nObs: Analisar maciez depois do toogling, passar na Molissa novamente"},{"processo":"Refila","parametros":["Refilar o couro somente o necessário"],"observacao":""},{"processo":"Estuco","parametros":["Utilizar Max: Base -  Estucar somente onde necessário"],"observacao":""},{"processo":"Lixa","parametros":["Lixa: 1ª Passagem 280-320","Velocidade Tapete 10Mts\nPressão (Zero)","Lixa: 2ª Passagem 400-500","Velocidade Tapete 10Mts\nPressão (Zero)"],"observacao":""},{"processo":"Toogling","parametros":["Temperatura 40ºC","Expanssão (5 CM)","Quantidade de Pinças ( 60- 70) \nDe aocordo com o tamanho da pele)","Obs: Atenção na Temperatura , para não exceder a 40ºC , para não impactar no resultado da Maciez"],"observacao":"Obs: Atenção na Temperatura , para não exceder a 40ºC , para não impactar no resultado da Maciez"}],"historicoRevisoes":[{"revisao":"5","data":"2020-09-04","conteudo":"ALTERAÇÃO ESPECIFICAÇÃO ESPESSURA E PROCESSO SECAGEM SELLA DK - (SEM DIVISORA /ESTUCO /LIXA), EM TESTE 10 PELES; AGUARDANDO, 300 PELES AGUARDANDO - (TR33/34/44). ARTIGO MORITZ PERMANECE NA LISTA DE CRUST RMG SEM RESTRIÇÃO DE TAMANHO (MÍNIMO 4MT²), ALTERAÇÃO NO FLUXO DE SECAGEM PARA: RETORSA/VÁCUO - TOOGLING 6CM- MOLISSA - REFILA - DIVISORA -LIXA. APROVAÇÃO VOLANTE JÚLIA - FORNECEDORNATIONAL BEEF / 10 PELES APROVADO - AGUARDANDO 300 PELES TESTE DE CONFIRMAÇÃO. INCLUSÃO DA META DE % YELD DE CADA ARTIGO;"},{"revisao":"6","data":"2020-10-29","conteudo":"ALTERADO O STATUS DE TESTES PARA VOLANTE JÚLIA NOS FORNECEDORES : SMX / SHINNEIDER / MAFRIG / TAYSON; ALTERAÇÃO DO % YELD VOLANTE JÚLIA DE -6,5 PARA-9. ALTERAÇÃO DO % YELD PALLADIO DE 0 PARA -2 ALTERAÇÃO ESPESSURA FINAL SELLA DK DE 11/12 PARA 12/13 (-)"},{"revisao":"7","data":"2021-03-02","conteudo":"1.ALTERADO CLASSIFICAÇÃO VOLANTE PREMIUM DE TR22 P/ TR34 E ACRESCENTADO OS CRITÉRIOS DE ACEITAÇÃO PARA MARCA DE FOGO; 2. ALTERADO META DE RENDIMENTO PALLADIO P/ -5%; 3. ALTERADO META DE RENDIMENTO VOLANTE JÚLIA P/ -9,5%; 4. ALTERADO META DE RENDIMENTO MORITZ PARA +2%"},{"revisao":"8","data":"2021-07-20","conteudo":"1.ALTERAÇÃO DA CLASSIFICAÇÃO TR34 PARA TR44 EM PALLADIO/MERIDIAN, MORITZ, SELLA DK E GINEVRA 2.ATUALIZAÇÃO DE TESTE DE FORNECEDOR CENCO/PROD"},{"revisao":"9","data":"2022-02-17","conteudo":"1. INCLUSÃO DO ARTIGO VOLANTE ROTO"},{"revisao":"10","data":"2022-03-01","conteudo":"1. INCLUSÃO DA ESPESSIFICAÇÃO DA REBAIXADEIRA DO ARTIGO MORITZ"},{"revisao":"11","data":"2022-07-18","conteudo":"1. INCLUSÃO DOS ARTIGOS ARIANNA E AURORA"},{"revisao":"12","data":"2023-02-06","conteudo":"1. REVISÃO GERAL, ONDE FOI INCLUÍDO OS ARTIGOS NOVOS ARES E PREMIUM (MULAN BRANDY)"},{"revisao":"13","data":"2023-04-24","conteudo":"1. INCLUÍDO OS ARTIGOS NOVOS ARIANNA - CRUST ITI"},{"revisao":"14","data":"2023-09-06","conteudo":"INCLUÍDO O ARTIGO NOVO ARIANNA - ICE"},{"revisao":"15","data":"2023-10-18","conteudo":"1. ALTERAÇÃO DO % YELD DO V.PREMIUM DE -9,0% PARA -9,5%. 2. ALTERAÇÃO DO % YELD DO PALLADIO DE -5,0% PARA -2,0%. 3. ALTERAÇÃO DO % YELD DO MERIDIAN DE -5,0% PARA -2,0%. 4. ALTERAÇÃO DO % YELD DO V. STANDART DE -9,0% PARA -9,5%. 5. ALTERAÇÃO DO % YELD DO V. ROTO DE -7,0% PARA -9,5%."},{"revisao":"16","data":"2023-11-03","conteudo":"INCLUSÃO DO ARTIGO CRUST IMPERIAL"},{"revisao":"17","data":"2024-01-15","conteudo":"1. INCLUSÃO DO ARTIGO VOLANTE JULIA - BACKEN BLACK 2. ARIANNA MULAN 3. ARIANNA FORGE"},{"revisao":"18","data":"2024-02-09","conteudo":"REVISÃO GERAL NO DOCUMENTO"},{"revisao":"19","data":"2024-05-02","conteudo":"INCLUSÃO DO ARTIGO VOLANTE LIONE"},{"revisao":"20","data":"2024-05-21","conteudo":"ALTERAÇÃO DOS PARAMETROS DE MACIEZ DO ARTIGO VOLANTE LIONE"},{"revisao":"21","data":"2024-07-26","conteudo":"INCLUSÃO DO ARTIGO F6. ALTERAÇÃO NA RECEITA DE RECURTIMENTO DOS ARTIGOS; ARIANNA WB BRASIL-ICE (MARIO COM MAIS ENGRAXE P/ ARIANNA). ARIANNA ÔMEGA LEATHER (MARIO COM MAIS ENGRAXE P/ ARIANNA). MULAN (MARIO COM MAIS ENGRAXE P/ ARIANNA). FORGE (MARIO COM MAIS ENGRAXE P/ ARIANNA)"},{"revisao":"22","data":"2024-10-07","conteudo":"ALTERAÇÃO NO FLUXO DO VOLANTE ROTO, INCLUSÃO DO PROCESSO DE ESTUCO. ATERAÇÃO NAS ESPECIFICAÇÕES DOS ARTIGOS: VOLANTE PREMIUM E VOLANTE LIONE RESTRIÇÃO DE MARCA DE FOGO."},{"revisao":"23","data":"2026-02-02","conteudo":"ALTERAÇÃO NO FLUXO DO ARIANNA, INCLUSÃO DO PROCESSO DE DIVISORA. ALTERAÇÃO NO CÓDIGO DO DOCUMENTO;BRM-MQ-SGQ-033 PARA BRM-MDL-SQ-SGI-033"}],"observacoesGerais":"OBSERVAÇÃO 01: Quando necessário, cada revisão deverá gerar um histórico, informando os lotes com as modificações e o período de cada alteração na documentação de embarque.\n\nOBSERVAÇÃO 02: Apartir da data de criação desse procedimento, cada embarque contendo informações do processo acima definido ou alterado deve ser informado para Itália , aos cuidados de  Marco Spagnolo.\n\nOBSERVAÇÃO 03: Esse documento não deve ser revisado, quando a alteração for especifica p/ 1 lote 1 teste no processo, porém toda a alteração realizada deverá ser comunicada pelo PCP.","observacoesArianna":"OBSERVAÇÃO 01: Quando necessário, cada revisão deverá gerar um histórico, informando os lotes com as modificações e o período de cada alteração na documentação de embarque.\n\nOBSERVAÇÃO 02: Apartir da data de criação desse procedimento, cada embarque contendo informações do processo acima definido ou alterado deve ser informado para Itália , aos cuidados de  Marco Spagnolo.\n\nOBSERVAÇÃO 03: Esse documento não deve ser revisado, quando a alteração for especifica p/ 1 lote 1 teste no processo, porém toda a alteração realizada deverá ser comunicada pelo PCP."};
const STORE_KEY = "crustQualityUserStoreV24"; // preserva ajustes locais já existentes
const SELECTED_KEY = "crustSelectedArticleV24";
const SYNC_CONFIG_KEY = "crustGitHubSyncConfigV26";
const DEFAULT_SYNC_CONFIG = {
  owner: "jaimeleite2012-sketch",
  repo: "Especifica-Crust-",
  branch: "main",
  path: "data/crust-sync-store.json",
  displayName: "Qualidade",
  autoPull: true,
  token: ""
};

const $ = (id) => document.getElementById(id);
const esc = (v) => String(v ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
const normalize = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const todayStamp = () => new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
const slug = (s) => normalize(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 72) || `artigo-${Date.now()}`;

let deferredInstallPrompt = null;
let activeFilter = null;
let selectedId = localStorage.getItem(SELECTED_KEY) || null;
let editMode = "edit";
let userStore = loadStore();
let syncConfig = loadSyncConfig();
let remoteSha = null;
let remoteUpdatedAt = null;
let syncBusy = false;
let syncMessage = "Central GitHub: aguardando";
let DB = buildRuntimeDB();
if (!selectedId || !DB.artigos.some(a => a.id === selectedId)) selectedId = DB.artigos[0]?.id || null;

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function loadStore() {
  const empty = { version: 24, updatedAt: null, edits: {}, created: [], history: [] };
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") return empty;
    return { ...empty, ...parsed, edits: parsed.edits || {}, created: parsed.created || [], history: parsed.history || [] };
  } catch { return empty; }
}

function saveStore(reason) {
  userStore.updatedAt = new Date().toISOString();
  if (reason) userStore.history.unshift({ when: new Date().toISOString(), text: reason });
  userStore.history = userStore.history.slice(0, 80);
  localStorage.setItem(STORE_KEY, JSON.stringify(userStore));
  DB = buildRuntimeDB();
  if (!DB.artigos.some(a => a.id === selectedId)) selectedId = DB.artigos[0]?.id || null;
  refreshAll();
}


function loadSyncConfig() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY) || "null");
    return { ...DEFAULT_SYNC_CONFIG, ...(parsed || {}) };
  } catch {
    return { ...DEFAULT_SYNC_CONFIG };
  }
}

function saveSyncConfig(next) {
  syncConfig = { ...syncConfig, ...next };
  localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
  refreshSyncStatus("Configuração GitHub salva neste aparelho");
}

function emptyStore(version = 26) {
  return { version, updatedAt: null, updatedBy: null, edits: {}, created: [], history: [] };
}

function safeStore(store) {
  const base = emptyStore(26);
  if (!store || typeof store !== "object") return base;
  return {
    ...base,
    ...store,
    edits: store.edits && typeof store.edits === "object" ? store.edits : {},
    created: Array.isArray(store.created) ? store.created : [],
    history: Array.isArray(store.history) ? store.history : []
  };
}

function mergeStores(remote, local, prefer = "remote") {
  remote = safeStore(remote);
  local = safeStore(local);
  const edits = prefer === "local" ? { ...remote.edits, ...local.edits } : { ...local.edits, ...remote.edits };
  const createdMap = new Map();
  const first = prefer === "local" ? remote.created : local.created;
  const second = prefer === "local" ? local.created : remote.created;
  [...first, ...second].forEach(item => {
    if (!item) return;
    const article = normalizeArticle(item, item.origem || "Cadastro GitHub");
    createdMap.set(article.id, article);
  });
  const seen = new Set();
  const history = [...(local.history || []), ...(remote.history || [])].filter(h => {
    const key = `${h.when || ""}|${h.text || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 200);
  return {
    ...emptyStore(26),
    ...remote,
    ...local,
    version: 26,
    updatedAt: new Date().toISOString(),
    updatedBy: syncConfig.displayName || "Usuário autorizado",
    edits,
    created: [...createdMap.values()],
    history
  };
}

function encodeBase64Unicode(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

function decodeBase64Unicode(text) {
  return decodeURIComponent(escape(atob(String(text || "").replace(/\n/g, ""))));
}

function githubApiUrl() {
  const owner = encodeURIComponent(syncConfig.owner.trim());
  const repo = encodeURIComponent(syncConfig.repo.trim());
  const path = syncConfig.path.split("/").map(encodeURIComponent).join("/");
  return `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
}

function githubHeaders() {
  const headers = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
  if (syncConfig.token) headers.Authorization = `Bearer ${syncConfig.token}`;
  return headers;
}

async function fetchRemoteEnvelope() {
  const url = `${githubApiUrl()}?ref=${encodeURIComponent(syncConfig.branch || "main")}&t=${Date.now()}`;
  const res = await fetch(url, { headers: githubHeaders(), cache: "no-store" });
  if (res.status === 404) return { exists: false, sha: null, store: emptyStore(26) };
  if (!res.ok) throw new Error(`GitHub GET ${res.status}`);
  const payload = await res.json();
  const decoded = decodeBase64Unicode(payload.content || "e30=");
  const store = safeStore(JSON.parse(decoded || "{}"));
  remoteSha = payload.sha || null;
  remoteUpdatedAt = store.updatedAt || null;
  return { exists: true, sha: remoteSha, store };
}

async function loadCentralStore(options = {}) {
  if (syncBusy) return;
  syncBusy = true;
  refreshSyncStatus("Baixando banco central...");
  try {
    const envelope = await fetchRemoteEnvelope();
    const merged = mergeStores(envelope.store, userStore, "remote");
    userStore = merged;
    localStorage.setItem(STORE_KEY, JSON.stringify(userStore));
    DB = buildRuntimeDB();
    refreshAll();
    refreshSyncStatus(envelope.exists ? `Banco central carregado · ${userStore.history.length} registros de histórico` : "Banco central ainda não existe; será criado no primeiro envio");
    if (!options.silent) toast("Dados centrais carregados do GitHub");
  } catch (err) {
    refreshSyncStatus(`Falha ao baixar central: ${err.message}`);
    if (!options.silent) alert("Não consegui baixar o banco central. Verifique internet, repositório e token, se o repositório for privado.");
  } finally {
    syncBusy = false;
  }
}

async function pushCentralStore(reason = "Atualização operacional") {
  if (!syncConfig.token) {
    refreshSyncStatus("Salvo localmente. Configure um token GitHub para gravar para todos.");
    toast("Salvo localmente. Falta configurar GitHub Sync.");
    return;
  }
  if (syncBusy) return;
  syncBusy = true;
  refreshSyncStatus("Enviando atualização para o GitHub...");
  try {
    const envelope = await fetchRemoteEnvelope();
    const merged = mergeStores(envelope.store, userStore, "local");
    const historyText = `${reason} · por ${syncConfig.displayName || "usuário autorizado"}`;
    merged.updatedAt = new Date().toISOString();
    merged.updatedBy = syncConfig.displayName || "Usuário autorizado";
    merged.history.unshift({ when: merged.updatedAt, text: historyText });
    merged.history = merged.history.slice(0, 200);

    const body = {
      message: `Atualiza especificações Crust - ${todayStamp()}`,
      content: encodeBase64Unicode(JSON.stringify(merged, null, 2)),
      branch: syncConfig.branch || "main",
      committer: {
        name: syncConfig.displayName || "Dashboard Crust",
        email: "dashboard-crust@users.noreply.github.com"
      }
    };
    if (envelope.sha) body.sha = envelope.sha;

    const res = await fetch(githubApiUrl(), {
      method: "PUT",
      headers: { ...githubHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`GitHub PUT ${res.status} ${txt.slice(0, 120)}`);
    }
    const response = await res.json();
    remoteSha = response.content?.sha || remoteSha;
    userStore = merged;
    localStorage.setItem(STORE_KEY, JSON.stringify(userStore));
    DB = buildRuntimeDB();
    refreshAll();
    refreshSyncStatus(`Sincronizado para todos · ${todayStamp()}`);
    toast("Alteração enviada para todos via GitHub");
  } catch (err) {
    refreshSyncStatus(`Falha ao enviar: ${err.message}`);
    alert("A alteração ficou salva neste aparelho, mas não foi enviada ao GitHub. Verifique token, permissão Contents: Read and write, internet e conflito de arquivo.");
  } finally {
    syncBusy = false;
  }
}

function refreshSyncStatus(message) {
  if (message) syncMessage = message;
  const pill = $("syncStatusPill");
  if (pill) pill.textContent = syncMessage;
  const line = $("syncStatusLine");
  if (line) line.textContent = `${syncMessage}${remoteUpdatedAt ? " · remoto: " + new Date(remoteUpdatedAt).toLocaleString("pt-BR") : ""}`;
}

function syncPanelHtml() {
  const tokenInfo = syncConfig.token ? "Token salvo neste aparelho" : "Token não configurado";
  return `
    <div class="note-card sync-card">
      <p class="eyebrow">Banco central GitHub API</p>
      <h3>Alterou uma vez, atualiza para todos</h3>
      <p class="mini" id="syncStatusLine">${esc(syncMessage)}</p>
      <div class="form-grid">
        ${field("Owner GitHub", "ghOwner", syncConfig.owner)}
        ${field("Repositório", "ghRepo", syncConfig.repo)}
        ${field("Branch", "ghBranch", syncConfig.branch)}
        ${field("Arquivo do banco central", "ghPath", syncConfig.path)}
        ${field("Seu nome no histórico", "ghDisplayName", syncConfig.displayName)}
        <label class="form-field full"><span>Token GitHub fine-grained — ${esc(tokenInfo)}</span><input id="ghToken" type="password" autocomplete="off" placeholder="Cole aqui somente no seu aparelho autorizado"></label>
      </div>
      <div class="form-actions full">
        <button class="primary-btn" type="button" id="saveSyncConfigBtn">Salvar conexão</button>
        <button class="ghost-btn" type="button" id="pullCentralBtn">Baixar atualização central</button>
        <button class="ghost-btn" type="button" id="pushCentralBtn">Enviar meus ajustes para todos</button>
        <button class="danger-btn" type="button" id="forgetTokenBtn">Esquecer token deste aparelho</button>
      </div>
      <p class="mini">O token não vai para o GitHub Pages nem para o repositório; fica salvo somente neste navegador. Usuários sem token podem consultar. Usuários autorizados colam o token para salvar alterações centrais.</p>
    </div>`;
}

function attachSyncPanelHandlers() {
  const saveBtn = $("saveSyncConfigBtn");
  if (!saveBtn) return;
  saveBtn.addEventListener("click", () => {
    const token = $("ghToken").value.trim();
    saveSyncConfig({
      owner: $("ghOwner").value.trim() || DEFAULT_SYNC_CONFIG.owner,
      repo: $("ghRepo").value.trim() || DEFAULT_SYNC_CONFIG.repo,
      branch: $("ghBranch").value.trim() || "main",
      path: $("ghPath").value.trim() || DEFAULT_SYNC_CONFIG.path,
      displayName: $("ghDisplayName").value.trim() || "Qualidade",
      token: token || syncConfig.token || ""
    });
    $("ghToken").value = "";
    loadCentralStore({ silent: false });
  });
  $("pullCentralBtn").addEventListener("click", () => loadCentralStore({ silent: false }));
  $("pushCentralBtn").addEventListener("click", () => pushCentralStore("Envio manual de ajustes"));
  $("forgetTokenBtn").addEventListener("click", () => {
    saveSyncConfig({ token: "" });
    toast("Token removido deste aparelho");
    renderEditPanel();
  });
}

async function syncAfterOperationalSave(reason) {
  if (syncConfig.token) {
    await pushCentralStore(reason);
  } else {
    refreshSyncStatus("Alteração salva só neste aparelho. Configure GitHub Sync para gravar para todos.");
  }
}

function uniqueBaseArticles(articles) {
  const seen = {};
  return (articles || []).map((raw, idx) => {
    const a = normalizeArticle(raw, "Matriz");
    const base = a.id || slug(`${a.artigo}-${a.cliente}-${a.tr}-${idx}`);
    seen[base] = (seen[base] || 0) + 1;
    a.id = seen[base] === 1 ? base : `${base}-${seen[base]}`;
    return a;
  });
}

function normalizeArticle(raw, origem = "Local") {
  const a = { ...raw };
  a.id = String(a.id || slug(`${a.artigo || "novo-artigo"}-${Date.now()}`));
  a.artigo = String(a.artigo || "NOVO ARTIGO").trim();
  a.tr = String(a.tr || "").trim();
  a.cor = String(a.cor || "").trim();
  a.codigoCor = String(a.codigoCor || "").trim();
  a.cliente = String(a.cliente || "").trim();
  a.yield = String(a.yield || "").trim();
  a.espessuraDivisora = String(a.espessuraDivisora || "").trim();
  a.receitaRecurtimento = String(a.receitaRecurtimento || "").trim();
  a.fluxoSecagem = String(a.fluxoSecagem || "").trim();
  a.caracteristicasFinais = String(a.caracteristicasFinais || "").trim();
  a.observacoesOperacionais = String(a.observacoesOperacionais || "").trim();
  a.status = a.status || (a.obsoleto ? "Obsoleto" : "Ativo");
  a.obsoleto = normalize(a.status).includes("obsoleto") || !!a.obsoleto;
  a.origem = a.origem || origem;
  a.fluxoPassos = Array.isArray(a.fluxoPassos) && a.fluxoPassos.length ? a.fluxoPassos : splitList(a.fluxoSecagem, "/");
  a.pontosCriticos = Array.isArray(a.pontosCriticos) ? a.pontosCriticos.filter(Boolean) : splitList(a.pontosCriticos || "", "\n");
  a.fornecedores = a.fornecedores && typeof a.fornecedores === "object" && !Array.isArray(a.fornecedores) ? a.fornecedores : parseSuppliers(a.fornecedores || "");
  a.tags = buildTags(a);
  a.possuiParametrosMaquina = !!a.possuiParametrosMaquina;
  return a;
}

function buildRuntimeDB() {
  const db = deepClone(BASE_DB);
  const baseArticles = uniqueBaseArticles(db.artigos);
  const merged = baseArticles.map(a => normalizeArticle({ ...a, ...(userStore.edits[a.id] || {}) }, a.origem || "Matriz"));
  const existing = new Set(merged.map(a => a.id));
  for (const created of userStore.created || []) {
    const article = normalizeArticle(created, "Cadastro local");
    if (!existing.has(article.id)) {
      merged.push(article);
      existing.add(article.id);
    }
  }
  db.artigos = merged;
  const activeArticles = merged.filter(a => !a.obsoleto);
  db.kpis = {
    ...db.kpis,
    artigos: merged.length,
    artigosAtivos: activeArticles.length,
    artigosObsoletos: merged.filter(a => a.obsoleto).length,
    cadastrosLocais: (userStore.created || []).length,
    ajustesLocais: Object.keys(userStore.edits || {}).length,
    clientes: new Set(merged.map(a => a.cliente).filter(Boolean)).size,
    trs: new Set(merged.map(a => a.tr).filter(Boolean)).size,
    receitas: new Set(merged.map(a => a.receitaRecurtimento).filter(Boolean)).size,
  };
  return db;
}

function splitList(value, sep = "\n") {
  const text = Array.isArray(value) ? value.join("\n") : String(value || "");
  return text.split(sep).map(x => x.trim()).filter(Boolean);
}

function parseSuppliers(text) {
  if (text && typeof text === "object" && !Array.isArray(text)) return text;
  const out = {};
  String(text || "").split(/\n|;/).forEach(line => {
    const clean = line.trim();
    if (!clean) return;
    const [name, ...statusParts] = clean.split(/:|-|·/);
    if (name) out[name.trim()] = (statusParts.join(" ").trim() || "Aprovado");
  });
  return out;
}

function suppliersToText(obj) {
  return Object.entries(obj || {}).map(([s, st]) => `${s}: ${st}`).join("\n");
}

function buildTags(a) {
  return [a.cliente, a.tr ? `TR ${a.tr}` : "", a.receitaRecurtimento, a.yield ? `Yield ${a.yield}` : "", a.obsoleto ? "OBSOLETO" : ""].filter(Boolean);
}

function currentArticle() {
  return DB.artigos.find(a => a.id === selectedId) || DB.artigos[0] || normalizeArticle({ artigo: "Sem artigo cadastrado" });
}

function localChangeCount() {
  return Object.keys(userStore.edits || {}).length + (userStore.created || []).length;
}

function switchView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $(`view-${view}`).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  if (view === "cadastros") renderEditPanel();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderKpis() {
  const items = [
    [DB.kpis.artigosAtivos ?? DB.kpis.artigos, "artigos ativos"],
    [DB.kpis.artigosObsoletos || 0, "obsoletos"],
    [DB.kpis.cadastrosLocais || 0, "cadastros locais"],
    [DB.kpis.ajustesLocais || 0, "artigos editados"],
    [DB.kpis.clientes, "clientes"],
    [DB.kpis.trs, "TR distintos"],
    [DB.kpis.receitas, "receitas"],
    [DB.kpis.fornecedoresAprovados, "fornec. aprovados"]
  ];
  $("kpiGrid").innerHTML = items.map(([v, label]) => `<div class="kpi-card"><strong>${esc(v)}</strong><span>${esc(label)}</span></div>`).join("");
}

function uniqueOptions(field) {
  return [...new Set(DB.artigos.map(a => a[field]).filter(Boolean))].slice(0, 24);
}

function renderFilters() {
  const filters = [
    ...uniqueOptions("cliente").map(v => ({ type: "cliente", value: v, label: v })),
    ...uniqueOptions("receitaRecurtimento").map(v => ({ type: "receitaRecurtimento", value: v, label: `Receita ${v}` })),
    { type: "status", value: "Obsoleto", label: "Obsoletos" },
    { type: "origem", value: "Cadastro local", label: "Cadastros locais" }
  ];
  $("filters").innerHTML = filters.map((f, i) => `<button class="filter-btn" data-i="${i}">${esc(f.label)}</button>`).join("");
  document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    const f = filters[Number(btn.dataset.i)];
    activeFilter = activeFilter && activeFilter.type === f.type && activeFilter.value === f.value ? null : f;
    renderFilterState();
    renderArticles();
  }));
  renderFilterState();
}

function renderFilterState() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    const label = btn.textContent;
    btn.classList.toggle("active", !!activeFilter && label === (activeFilter.type === "receitaRecurtimento" ? `Receita ${activeFilter.value}` : activeFilter.value === "Cadastro local" ? "Cadastros locais" : activeFilter.value === "Obsoleto" ? "Obsoletos" : activeFilter.value));
  });
}

function articleMatches(a, q) {
  const haystack = normalize([
    a.artigo, a.tr, a.cor, a.codigoCor, a.cliente, a.yield,
    a.espessuraDivisora, a.receitaRecurtimento, a.fluxoSecagem, a.caracteristicasFinais,
    a.status, a.origem, a.observacoesOperacionais
  ].join(" "));
  return haystack.includes(normalize(q));
}

function filteredArticles() {
  const q = $("searchBox").value.trim();
  return DB.artigos.filter(a => {
    const byText = !q || articleMatches(a, q);
    const byFilter = !activeFilter || String(a[activeFilter.type] || "") === String(activeFilter.value);
    return byText && byFilter;
  });
}

function renderArticles() {
  const list = filteredArticles();
  if (!list.length) {
    $("articleGrid").innerHTML = $("emptyTemplate").innerHTML;
    return;
  }
  $("articleGrid").innerHTML = list.map(a => `
    <button class="article-card ${a.obsoleto ? "obsolete" : ""} ${a.origem === "Cadastro local" ? "local" : ""}" data-id="${esc(a.id)}">
      <div class="article-meta">
        <span class="pill">TR ${esc(a.tr || "-")}</span>
        <span class="pill">Yield ${esc(a.yield || "-")}</span>
        ${a.obsoleto ? `<span class="pill obsolete-pill">OBSOLETO</span>` : ""}
        ${a.origem === "Cadastro local" ? `<span class="pill edit-pill">LOCAL</span>` : ""}
      </div>
      <h4>${esc(a.artigo)}</h4>
      <p class="mini">${esc(a.cliente || "Cliente não informado")} · ${esc(a.receitaRecurtimento || "Receita não informada")}</p>
      <div class="card-foot"><span>${esc(a.fluxoPassos.length)} etapas</span><span>abrir →</span></div>
    </button>
  `).join("");

  document.querySelectorAll(".article-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      localStorage.setItem(SELECTED_KEY, selectedId);
      renderAllDetails(true);
      switchView("ficha");
      if (navigator.vibrate) navigator.vibrate(18);
    });
  });
}

function fact(label, value) {
  return `<div class="fact"><span>${esc(label)}</span><strong>${esc(value || "-")}</strong></div>`;
}

function renderDetail(flash = false) {
  const a = currentArticle();
  $("detailPanel").classList.toggle("flash", !!flash);
  $("detailPanel").innerHTML = `
    <div class="detail-hero">
      <div>
        <p class="eyebrow">Ficha técnica do artigo</p>
        <h2 class="big-title">${esc(a.artigo)}</h2>
        <div class="article-meta">${a.tags.map(t => `<span class="pill ${normalize(t).includes("obsoleto") ? "obsolete-pill" : ""}">${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="alert-list">
        ${(a.pontosCriticos.length ? a.pontosCriticos : ["Nenhum ponto crítico explícito extraído; validar conforme inspeção e lote."]).map(p => `<div class="alert-item">${esc(p)}</div>`).join("")}
      </div>
    </div>

    <div class="tools-row detail-actions">
      <button class="primary-btn" id="editCurrentBtn">Editar este artigo</button>
      <button class="ghost-btn" id="toggleObsoleteBtn">${a.obsoleto ? "Reativar artigo" : "Marcar obsoleto"}</button>
      <button class="ghost-btn" id="duplicateCurrentBtn">Duplicar como novo</button>
    </div>

    <div class="fact-grid">
      ${fact("Status", a.obsoleto ? "Obsoleto" : "Ativo")}
      ${fact("Origem", a.origem)}
      ${fact("TR / Classificação", a.tr)}
      ${fact("Cliente", a.cliente)}
      ${fact("% Yield alvo", a.yield)}
      ${fact("Espessura divisora", a.espessuraDivisora)}
      ${fact("Receita de recurtimento", a.receitaRecurtimento)}
      ${fact("Cód. cor", a.codigoCor)}
    </div>

    <h3>Cores aplicáveis</h3>
    <div class="text-block">${esc(a.cor || "-")}</div>

    <h3 style="margin-top:16px">Características finais / envio para Itália</h3>
    <div class="text-block">${esc(a.caracteristicasFinais || "-")}</div>

    ${a.observacoesOperacionais ? `<h3 style="margin-top:16px">Observações operacionais locais</h3><div class="text-block local-note">${esc(a.observacoesOperacionais)}</div>` : ""}
  `;
  $("editCurrentBtn").addEventListener("click", () => { editMode = "edit"; switchView("cadastros"); });
  $("duplicateCurrentBtn").addEventListener("click", () => { editMode = "duplicate"; switchView("cadastros"); });
  $("toggleObsoleteBtn").addEventListener("click", () => toggleObsolete(a.id));
  setTimeout(() => $("detailPanel").classList.remove("flash"), 450);
}

function renderFlow() {
  const a = currentArticle();
  $("flowPanel").innerHTML = `
    <div class="flow-card ${a.obsoleto ? "obsolete-box" : ""}">
      <p class="eyebrow">Fluxo do artigo selecionado</p>
      <h2 class="big-title">${esc(a.artigo)}</h2>
      <p>${esc(a.fluxoSecagem || "Fluxo não informado na matriz.")}</p>
      <div class="flow-lane">
        ${a.fluxoPassos.map((step, i) => `
          <div class="flow-node">
            <div class="flow-number">${i + 1}</div>
            <div><strong>${esc(step)}</strong><p class="mini">Sequência operacional conforme matriz/ajuste local</p></div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="flow-card">
      <p class="eyebrow">Pontos de controle da qualidade</p>
      <h3>O que precisa ser observado no processo</h3>
      <div class="alert-list">
        ${(a.pontosCriticos.length ? a.pontosCriticos : ["Sem alerta textual específico; aplicar critérios gerais de espessura, classificação, maciez, aspecto e identificação do lote."]).map(p => `<div class="alert-item">${esc(p)}</div>`).join("")}
      </div>
    </div>
  `;
}

function renderMachines() {
  const a = currentArticle();
  const applicable = a.possuiParametrosMaquina;
  const intro = applicable
    ? `Parâmetros aplicáveis por receita/família do artigo selecionado: ${esc(a.artigo)}.`
    : `O artigo selecionado não tem parâmetros detalhados de máquina na aba Arianna. Abaixo permanece a base técnica cadastrada para consulta.`;
  $("machinePanel").innerHTML = `
    <div class="machine-card" style="grid-column: 1 / -1">
      <p class="eyebrow">Aplicabilidade</p>
      <h3>${applicable ? "Parâmetros aplicáveis" : "Consulta técnica complementar"}</h3>
      <p>${intro}</p>
    </div>
    ${DB.parametrosMaquinaArianna.map(m => `
      <div class="machine-card">
        <h4>${esc(m.processo)}</h4>
        <ul class="param-list">
          ${m.parametros.map(p => `<li>${esc(p)}</li>`).join("")}
        </ul>
      </div>
    `).join("")}
  `;
}

function statusClass(v) {
  const n = normalize(v);
  if (n.includes("reprov")) return "reprovado";
  if (n.includes("teste")) return "teste";
  if (n.includes("aprov") || n.includes("aprv")) return "aprovado";
  return "";
}

function renderSuppliers() {
  const a = currentArticle();
  const selectedSuppliers = a.fornecedores || {};
  const chips = Object.entries(selectedSuppliers).length
    ? Object.entries(selectedSuppliers).map(([s, st]) => `<span class="status-chip ${statusClass(st)}">${esc(s)} · ${esc(st)}</span>`).join("")
    : `<span class="status-chip">Fornecedor específico não encontrado para este artigo na matriz.</span>`;

  const supplierNames = [...new Set(DB.fornecedoresMatriz.flatMap(r => Object.keys(r.fornecedores)))];
  const table = `
    <div class="matrix">
      <table>
        <thead><tr><th>Artigo</th>${supplierNames.map(s => `<th>${esc(s)}</th>`).join("")}</tr></thead>
        <tbody>
          ${DB.fornecedoresMatriz.map(r => `
            <tr>
              <td><strong>${esc(r.artigo)}</strong></td>
              ${supplierNames.map(s => `<td><span class="status-chip ${statusClass(r.fornecedores[s] || "")}">${esc(r.fornecedores[s] || "-")}</span></td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>`;

  $("supplierPanel").innerHTML = `
    <div class="supplier-card">
      <p class="eyebrow">Fornecedores do artigo selecionado</p>
      <h2 class="big-title">${esc(a.artigo)}</h2>
      <div class="supplier-chips">${chips}</div>
    </div>

    <div class="supplier-card">
      <p class="eyebrow">Códigos de fornecedores</p>
      <div class="supplier-chips">
        ${DB.fornecedoresCodigo.map(c => `<span class="status-chip">${esc(c.codigo)} · ${esc(c.fornecedor)}</span>`).join("")}
      </div>
    </div>

    <div class="supplier-card">
      <p class="eyebrow">Matriz completa</p>
      <h3>Controle de fornecedor habilitado</h3>
      ${table}
    </div>
  `;
}

function renderRevisions() {
  $("revisionPanel").innerHTML = DB.historicoRevisoes.slice().reverse().map(r => `
    <article class="revision-item">
      <div class="rev-badge">${esc(r.revisao)}</div>
      <div>
        <time>${esc(r.data || "sem data")}</time>
        <p>${esc(r.conteudo)}</p>
      </div>
    </article>
  `).join("");

  const history = userStore.history || [];
  $("localHistoryPanel").innerHTML = `
    <div class="section-head"><div><p class="eyebrow">Histórico local do celular</p><h3>Alterações operacionais salvas neste aparelho</h3></div></div>
    ${history.length ? history.map(h => `<article class="revision-item local-rev"><div class="rev-badge">LOC</div><div><time>${esc(new Date(h.when).toLocaleString("pt-BR"))}</time><p>${esc(h.text)}</p></div></article>`).join("") : `<div class="note-card">Nenhuma alteração local registrada neste celular.</div>`}
  `;

  $("obsPanel").innerHTML = `
    <p class="eyebrow">Observações gerais da matriz</p>
    <h3>Regras de comunicação e documentação</h3>
    <div class="text-block">${esc(DB.observacoesGerais || "-")}</div>
  `;
}

function buildArticleReport(a) {
  const suppliers = Object.entries(a.fornecedores || {}).map(([s, st]) => `- ${s}: ${st}`).join("\n") || "- Sem fornecedor específico encontrado.";
  return `FICHA TÉCNICA · ${a.artigo}
Documento: ${DB.documento.codigo} Rev.${DB.documento.revisao}
Status: ${a.obsoleto ? "OBSOLETO" : "ATIVO"}
Origem: ${a.origem || "-"}

TR: ${a.tr || "-"}
Cliente: ${a.cliente || "-"}
Yield alvo: ${a.yield || "-"}
Espessura divisora: ${a.espessuraDivisora || "-"}
Receita de recurtimento: ${a.receitaRecurtimento || "-"}
Cores: ${a.cor || "-"}
Código cor: ${a.codigoCor || "-"}

FLUXO:
${a.fluxoPassos.map((p, i) => `${i+1}. ${p}`).join("\n")}

CARACTERÍSTICAS / ENVIO:
${a.caracteristicasFinais || "-"}

PONTOS CRÍTICOS:
${a.pontosCriticos.map(p => `- ${p}`).join("\n") || "- Validar critérios gerais no lote."}

FORNECEDORES:
${suppliers}

OBSERVAÇÕES OPERACIONAIS LOCAIS:
${a.observacoesOperacionais || "-"}
`;
}

function articleToFormSource() {
  const a = currentArticle();
  if (editMode === "new") return normalizeArticle({ artigo: "", status: "Ativo" });
  if (editMode === "duplicate") return normalizeArticle({ ...a, id: slug(`${a.artigo}-copia-${Date.now()}`), artigo: `${a.artigo} - NOVO`, origem: "Cadastro local", status: "Ativo", obsoleto: false });
  return a;
}

function field(label, id, value = "", type = "text", extra = "") {
  return `<label class="form-field"><span>${esc(label)}</span><input id="${id}" type="${type}" value="${esc(value)}" ${extra}></label>`;
}
function area(label, id, value = "", rows = 4) {
  return `<label class="form-field full"><span>${esc(label)}</span><textarea id="${id}" rows="${rows}">${esc(value)}</textarea></label>`;
}

function renderEditPanel() {
  const a = articleToFormSource();
  const isNew = editMode === "new" || editMode === "duplicate";
  $("editPanel").innerHTML = `
    <div class="edit-card">
      <p class="eyebrow">Cadastro e atualização</p>
      <h2>${isNew ? "Cadastrar novo artigo" : "Editar artigo selecionado"}</h2>
      <p>Use esta aba no celular para registrar mudanças de processo, observações técnicas, novos artigos ou obsolescência. As alterações são salvas neste aparelho e reaplicadas sobre a matriz oficial.</p>
      <div class="tools-row">
        <button class="primary-btn" id="startNewBtn">+ Novo artigo em branco</button>
        <button class="ghost-btn" id="loadSelectedBtn">Carregar selecionado</button>
        <button class="ghost-btn" id="duplicateBtn">Duplicar selecionado</button>
      </div>
    </div>

    <form id="articleForm" class="edit-card form-grid">
      <input type="hidden" id="formId" value="${esc(a.id)}">
      <label class="form-field"><span>Status</span><select id="fStatus"><option ${!a.obsoleto ? "selected" : ""}>Ativo</option><option ${a.obsoleto ? "selected" : ""}>Obsoleto</option></select></label>
      ${field("Artigo", "fArtigo", a.artigo, "text", "required")}
      ${field("TR / Classificação", "fTr", a.tr)}
      ${field("Cliente", "fCliente", a.cliente)}
      ${field("Yield alvo", "fYield", a.yield)}
      ${field("Espessura divisora", "fEspessura", a.espessuraDivisora)}
      ${field("Receita de recurtimento", "fReceita", a.receitaRecurtimento)}
      ${field("Código cor", "fCodigoCor", a.codigoCor)}
      <label class="form-field checkbox"><input id="fParametros" type="checkbox" ${a.possuiParametrosMaquina ? "checked" : ""}><span>Possui parâmetros de máquina aplicáveis</span></label>
      ${area("Cores aplicáveis", "fCor", a.cor, 3)}
      ${area("Fluxo de secagem/processo", "fFluxo", a.fluxoSecagem, 4)}
      ${area("Características finais / envio", "fCaracteristicas", a.caracteristicasFinais, 5)}
      ${area("Pontos críticos — um por linha", "fPontos", (a.pontosCriticos || []).join("\n"), 4)}
      ${area("Fornecedores — formato: Nome: Status", "fFornecedores", suppliersToText(a.fornecedores), 4)}
      ${area("Observações operacionais locais", "fObs", a.observacoesOperacionais, 4)}
      <div class="form-actions full">
        <button class="primary-btn" type="submit">Salvar alterações</button>
        <button class="ghost-btn" type="button" id="markObsoleteForm">Marcar obsoleto</button>
        <button class="ghost-btn" type="button" id="exportBackupBtn">Exportar backup</button>
        <label class="ghost-btn file-label">Importar backup<input id="importBackupInput" type="file" accept="application/json" hidden></label>
        <button class="danger-btn" type="button" id="clearLocalBtn">Limpar ajustes locais</button>
      </div>
    </form>

    <div class="note-card">
      <p class="eyebrow">Regra operacional V26</p>
      <h3>Banco central para todos os usuários</h3>
      <p>As alterações continuam ficando temporariamente protegidas neste aparelho, mas agora podem ser enviadas ao banco central do GitHub. Ao salvar com token autorizado, a alteração passa a aparecer para todos que abrirem o dashboard.</p>
    </div>
    ${syncPanelHtml()}
  `;
  $("startNewBtn").addEventListener("click", () => { editMode = "new"; renderEditPanel(); });
  $("loadSelectedBtn").addEventListener("click", () => { editMode = "edit"; renderEditPanel(); });
  $("duplicateBtn").addEventListener("click", () => { editMode = "duplicate"; renderEditPanel(); });
  $("articleForm").addEventListener("submit", handleFormSave);
  $("markObsoleteForm").addEventListener("click", () => { $("fStatus").value = "Obsoleto"; handleFormSave(new Event("submit")); });
  $("exportBackupBtn").addEventListener("click", exportBackup);
  $("importBackupInput").addEventListener("change", importBackup);
  $("clearLocalBtn").addEventListener("click", clearLocalChanges);
  attachSyncPanelHandlers();
}

function readFormArticle() {
  const id = $("formId").value || slug(`${$("fArtigo").value}-${Date.now()}`);
  const status = $("fStatus").value;
  return normalizeArticle({
    id,
    artigo: $("fArtigo").value.trim() || "NOVO ARTIGO",
    status,
    obsoleto: status === "Obsoleto",
    tr: $("fTr").value,
    cliente: $("fCliente").value,
    yield: $("fYield").value,
    espessuraDivisora: $("fEspessura").value,
    receitaRecurtimento: $("fReceita").value,
    codigoCor: $("fCodigoCor").value,
    cor: $("fCor").value,
    fluxoSecagem: $("fFluxo").value,
    fluxoPassos: splitList($("fFluxo").value, "/"),
    caracteristicasFinais: $("fCaracteristicas").value,
    pontosCriticos: splitList($("fPontos").value, "\n"),
    fornecedores: parseSuppliers($("fFornecedores").value),
    observacoesOperacionais: $("fObs").value,
    possuiParametrosMaquina: $("fParametros").checked,
    origem: (editMode === "new" || editMode === "duplicate" || !BASE_DB.artigos.some(x => x.id === id)) ? "Cadastro local" : "Matriz editada"
  }, (editMode === "new" || editMode === "duplicate") ? "Cadastro local" : "Matriz editada");
}

function handleFormSave(e) {
  e.preventDefault();
  const article = readFormArticle();
  const baseIds = new Set(uniqueBaseArticles(BASE_DB.artigos).map(a => a.id));
  if (baseIds.has(article.id) && editMode !== "new" && editMode !== "duplicate") {
    userStore.edits[article.id] = { ...article, origem: "Matriz editada" };
  } else {
    article.id = article.id || slug(`${article.artigo}-${Date.now()}`);
    article.origem = "Cadastro local";
    const ix = userStore.created.findIndex(x => x.id === article.id);
    if (ix >= 0) userStore.created[ix] = article; else userStore.created.push(article);
  }
  selectedId = article.id;
  localStorage.setItem(SELECTED_KEY, selectedId);
  saveStore(`${article.obsoleto ? "Marcado como obsoleto" : "Salvo/atualizado"}: ${article.artigo}`);
  editMode = "edit";
  switchView("ficha");
  toast(syncConfig.token ? "Salvo; enviando para todos..." : "Alteração salva no celular");
  syncAfterOperationalSave(`${article.obsoleto ? "Marcado como obsoleto" : "Salvo/atualizado"}: ${article.artigo}`);
}

function toggleObsolete(id) {
  const a = currentArticle();
  const updated = normalizeArticle({ ...a, status: a.obsoleto ? "Ativo" : "Obsoleto", obsoleto: !a.obsoleto }, a.origem);
  const baseIds = new Set(uniqueBaseArticles(BASE_DB.artigos).map(x => x.id));
  if (baseIds.has(id) && updated.origem !== "Cadastro local") userStore.edits[id] = { ...updated, origem: "Matriz editada" };
  else {
    const ix = userStore.created.findIndex(x => x.id === id);
    if (ix >= 0) userStore.created[ix] = updated;
  }
  saveStore(`${updated.obsoleto ? "Marcado como obsoleto" : "Reativado"}: ${updated.artigo}`);
  toast(updated.obsoleto ? "Artigo obsoleto: card ficará vermelho" : "Artigo reativado");
  syncAfterOperationalSave(`${updated.obsoleto ? "Marcado como obsoleto" : "Reativado"}: ${updated.artigo}`);
}

function exportBackup() {
  const payload = {
    tipo: "backup-ajustes-dashboard-crust",
    documento: `${BASE_DB.documento.codigo} Rev.${BASE_DB.documento.revisao}`,
    exportadoEm: new Date().toISOString(),
    store: userStore
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `backup-ajustes-crust-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast("Backup exportado");
}

function importBackup(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const incoming = payload.store || payload;
      if (!incoming || typeof incoming !== "object") throw new Error("Arquivo inválido");
      userStore = { version: 26, updatedAt: new Date().toISOString(), edits: incoming.edits || {}, created: incoming.created || [], history: incoming.history || [] };
      saveStore("Backup de ajustes importado");
      toast("Backup importado com sucesso");
    } catch (err) {
      alert("Não foi possível importar este backup. Verifique se o arquivo JSON é do dashboard Crust.");
    }
  };
  reader.readAsText(file, "utf-8");
}

function clearLocalChanges() {
  const ok = confirm("Tem certeza que deseja apagar TODOS os ajustes locais deste celular? A matriz oficial permanecerá, mas edições e novos cadastros locais serão removidos.");
  if (!ok) return;
  userStore = { version: 26, updatedAt: null, updatedBy: null, edits: {}, created: [], history: [] };
  localStorage.setItem(STORE_KEY, JSON.stringify(userStore));
  DB = buildRuntimeDB();
  selectedId = DB.artigos[0]?.id || null;
  refreshAll();
  toast("Ajustes locais apagados");
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function renderAllDetails(flash = false) {
  renderDetail(flash);
  renderFlow();
  renderMachines();
  renderSuppliers();
}

function refreshAll() {
  $("docMeta").textContent = `${DB.documento.codigo} · Rev.${DB.documento.revisao} · última revisão ${DB.kpis.dataUltimaRevisao || "não informada"} · ${localChangeCount()} ajustes · ${syncConfig.token ? "GitHub Sync ativo" : "consulta central"}`;
  $("heroRev").textContent = DB.documento.revisao;
  $("localChangesPill").textContent = `${localChangeCount()} ajustes`;
  refreshSyncStatus();
  renderKpis();
  renderFilters();
  renderArticles();
  renderAllDetails();
  renderRevisions();
}

function init() {
  refreshAll();
  $("searchBox").addEventListener("input", renderArticles);
  $("clearFilters").addEventListener("click", () => {
    activeFilter = null;
    $("searchBox").value = "";
    renderFilterState();
    renderArticles();
  });
  $("newArticleTop").addEventListener("click", () => { editMode = "new"; switchView("cadastros"); });
  $("editSelectedTop").addEventListener("click", () => { editMode = "edit"; switchView("cadastros"); });
  $("exportBackupTop").addEventListener("click", exportBackup);
  const syncTop = $("syncTop");
  if (syncTop) syncTop.addEventListener("click", () => { switchView("cadastros"); setTimeout(() => $("ghOwner")?.scrollIntoView({ behavior: "smooth", block: "center" }), 250); });
  $("exportBackupRev").addEventListener("click", exportBackup);
  document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  $("copyReport").addEventListener("click", async () => {
    const txt = buildArticleReport(currentArticle());
    try {
      await navigator.clipboard.writeText(txt);
      $("copyReport").textContent = "Relatório copiado";
      setTimeout(() => $("copyReport").textContent = "Copiar relatório do artigo", 1800);
    } catch { alert(txt); }
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => null));
  }
  loadCentralStore({ silent: true });
  window.addEventListener("focus", () => loadCentralStore({ silent: true }));
  setInterval(() => loadCentralStore({ silent: true }), 5 * 60 * 1000);
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  $("btnInstall").hidden = false;
});
$("btnInstall").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("btnInstall").hidden = true;
});

init();

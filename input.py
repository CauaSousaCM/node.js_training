IDADE_MINIMA = 18
nome = str(input("Digite seu nome:"))
idade =int(input("Digite sua idade:"))

if idade >= IDADE_MINIMA:
    print(f'O cliente {nome}\n'+
          'possui idade suficiente para ingerir'+
          ' bebidas alcoólicas.')
else:
    print(f'O cliente {nome} que possui'+
          f' {idade} anos\nnão atingiu a idade mínima'+
          ' para ingerir bebidas alcoólicas,\njá que a idade'+
          f' mínima é {IDADE_MINIMA}.')
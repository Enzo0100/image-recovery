# image-recovery

Como dar profundidade e movimento a uma foto 2D usando Visão Computacional e IA?

Esta foto tem mais de cem anos. Agora ela tem cor, profundidade e uma câmera que atravessa o céu do Rio de 1910.

O palácio no centro, o Monroe, foi demolido em 1976. A colina atrás dele foi arrasada em 1922. Dentro da foto, os dois voltam a ter chão.

Quatro passos para acordar uma foto antiga:
→ LaMa: remove manchas e imperfeições da fotografia.
→ DDColor: adiciona cores à imagem.
→ Depth Anything 3: estima a profundidade, identificando a distância relativa entre os elementos da cena.
→ Câmera virtual: utiliza o mapa de profundidade para criar pequenos movimentos de câmera e um efeito de paralaxe, dando a sensação de profundidade à imagem.

Os modelos são abertos e não precisei treinei nenhum customizado. Mesmo assim, nem tudo a IA fez sozinho: o DDColor inventou um pôr do sol e pintou os prédios brancos de creme. Esse retoque foi à mão.

O resto das cores foram um palpite da IA, e a profundidade também. Nada disso é memória da época. É uma forma de olhar para ela.

Fiz o mesmo com outras cinco fotos do Rio, de 1885 a 1910. Os vídeos e o código aberto estão no primeiro comentário.

Que foto antiga você gostaria de ver ganhando vida?

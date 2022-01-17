import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function PageTitle({ title }) {

    return (
        <Box
            sx={{ /* a prop sx é similar ao styles inline, mas tem acesso
                às props do theme.js e outras vantagens. Aí dá pra fazer
                tudo por aqui, mas deixei o arquivo css pra vocês compara-
                rem. Basicamente:
                - O nome das propriedades são em camelCase;
                - Os valores são strings (quando forem números é porque
                fazem uso de alguma constante definida no theme.js
                Ex.:
                borderRadius: 1 / 2
                vai ser metade do borderRadius definido em
                shape.borderRadius no theme.js)
                - Sempre dá pra fazer referência aos valores do theme.js,
                como faço na cor por ex. */
                display: "flex",
                alignItems: "center",
                height: "77px",
                backgroundColor: "primary.main", /*
                primary.main definida no theme.js. Também poderia ser
                secondary.main ou até primary.contrastText. */
            }}>

            {/* Enquanto a box de cima ocupa toda a tela, o container
            abaixo serve pra conter o título dentro da coluna imaginária
            onde vai ficar o conteúdo da página. O Container por padrão usa
            a prop maxWidth="lg", onde lg é um 'breakpoint' que pode ser
            definino no theme.js mas por padrão no material ui equivale à
            1200px. Outros breakpoints são: 'sm', 'md', 'lg', 'xl'. */}
            <Container>
                <Typography
                    variant="h2" /* Esse texto vai herdar as caracterias da
                    variant h2 definida no theme.js. */
                    color="primary.contrastText">
                    {title}
                </Typography>
            </Container>
        </Box>
    )
    /* Olhem como o PageTitle agora não só está responsivo como também o
    tamanho da fonte é responsivo e muda de tamanho a cada breakpoint. */

    /* Também olha que legal, mesmo sem saber a fonte, as cores e os
    paddings do container por exemplo, não precisamos mais alterar nada
    aqui. É só editar as props do Container ou as variantes de tipografia
    que as alterações vão se propagar pra todo app. */
}

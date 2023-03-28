

import * as C from './style'
import { FiX } from 'react-icons/fi'

export default function Modal({conteudo, close}){
    return(
        <C.Modal>
           <C.Container>
                <C.Button onClick={ close }>
                    <FiX size={25} color="#FFF" />
                    Voltar
                </C.Button>

                <C.Main>
                    <C.ModalTitle>Detalhes do chamado</C.ModalTitle>

                    <C.Row>
                        <C.Span>
                            Cliente: <i>{conteudo.customer}</i>
                        </C.Span>
                    </C.Row>

                    <C.Row>
                        <C.Span>
                            Assunto:<i>{conteudo.subject}</i>
                        </C.Span>
                        <C.Span>
                            Cadastrado em:<i>{conteudo.createdFormat}</i>
                        </C.Span>
                        <C.Span>
                            Status:<i
                                style={{color:"#FFF", backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c' : '#999'}}
                            >
                                {conteudo.status}
                            </i>
                        </C.Span>
                    </C.Row>
                    {conteudo.complement !== '' && (
                          <>
                          <h3>Complemento</h3>
                          <p>{conteudo.complement}</p>
                      </>
                    )}
                </C.Main>
           </C.Container>
        </C.Modal>
    )
}
import { Button, Divider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Layout from 'components/Layout'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { useEffect, useState } from 'react'

const HtmlPreviewDiretorias = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const diretorias = data.integrantes || [];

  return (
    <>
      {diretorias
        .map((d, i) =>
          <Box key={`${i}-${d.name}`}>
            <Typography variant="h2">Previsualização da página: {d.title}</Typography>
            <div dangerouslySetInnerHTML={{ __html: d.content }} />
            <Divider />
          </Box>
        )}
    </>
  )
}

const HtmlPreviewPages = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  console.log({ data })

  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
  )
}

const HtmlPreview = ({ entry }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: entry.getIn(['data', 'content']) }} />
  )
}

var schema = {
  properties: {
    separator: { type: 'string' },
  },
}

const HtmlEditorPreview = ({
  value
}) => {
  return (<p>{value}</p>)
}

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()

      CMS.registerPreviewTemplate('diretorias', HtmlPreviewDiretorias)

      CMS.registerPreviewTemplate('noticias', HtmlPreview)
      CMS.registerPreviewTemplate('eventos', HtmlPreview)
      CMS.registerPreviewTemplate('publicacoes', HtmlPreview)

      CMS.registerPreviewTemplate('page_historia', HtmlPreviewPages)
      CMS.registerPreviewTemplate('page_sobre', HtmlPreviewPages)
      CMS.registerPreviewTemplate('page_associese', HtmlPreviewPages)
    })()
  }, [])

  return <div />
}

export default Admin

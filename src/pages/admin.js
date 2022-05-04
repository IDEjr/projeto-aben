import { Button, TextField } from '@mui/material'
import Layout from 'components/Layout'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { useEffect, useState } from 'react'

const HtmlPreview = ({ entry, widgetFor }) => {
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

      CMS.registerPreviewTemplate('publicacoes', HtmlPreview)
    })()
  }, [])

  return <div />
}

export default Admin

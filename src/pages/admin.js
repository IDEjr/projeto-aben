import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'

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
      const EditorWrapper = (
        await import("components/NetlifyWrappers/EditorWrapper")
      ).default;
      CMS.init()

      // Can be changed to an internal url instead of cdn.
      CMS.registerPreviewStyle("https://cdn.quilljs.com/1.3.6/quill.snow.css");
      CMS.registerWidget("editorWrapper", EditorWrapper);

      CMS.registerPreviewTemplate('diretorias', HtmlPreviewDiretorias)
    })()
  }, [])

  return <div />
}

export default Admin

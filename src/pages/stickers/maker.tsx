import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

type Props = {
  onUpload: (filePath: string) => void
}

export default function Maker({ onUpload }: Props): JSX.Element {
  const supabase = useSupabaseClient()
  const [uploading, setUploading] = useState(false)
  const [fileName, setFileName] = useState('')

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value)
    }

    //POST https://azdltemsflxeuruxexmi.supabase.co/storage/v1/object/cats/Zoro.jpg 400
    
  const uploadSticker = async (event: React.ChangeEvent<HTMLInputElement>, fileName: string): Promise<void> => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileFormat = `${fileName}.${fileExt}`
      const filePath = `${fileFormat}`

      // Check file size
      const fileSizeInMB = file.size / (1024 * 1024)
      if (fileSizeInMB > 1) {
        throw new Error('File size exceeds 1MB.')
      }

      let { error: uploadError } = await supabase.storage
        .from('cats')
        //.upload(filePath, file)
        .upload(filePath, file, { upsert: true })

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('Error uploading sticker!')
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <div className="contenedor">
        <div className="row">
          <div className="col-12">
            <h1> Maker </h1>
          </div>
        </div>

        <label htmlFor="file-name-input">File name:</label>
          <input type="text" id="file-name-input" value={fileName} onChange={handleFileNameChange} />

        <div style={{ width: '100px' }}>
          <label className="button primary block" htmlFor="single">
            {uploading ? 'Uploading ...' : 'Upload'}
          </label>
          <input
            style={{
              visibility: 'hidden',
              position: 'absolute',
            }}
            type="file"
            id="single"
            accept="image/*"
            onChange={(e) => uploadSticker(e, fileName)}
            disabled={uploading}
          />
        </div>
      </div>
    </>
  )
}

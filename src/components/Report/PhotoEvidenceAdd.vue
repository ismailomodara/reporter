<template>
  <el-upload
    v-loading="uploading"
    class="upload-demo"
    drag
    :auto-upload="false"
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture"
    :show-file-list="true"
    :on-change="setImages"
    :on-remove="removeImage"
    :on-exceed="limitExceed"
    accept="image/png,image/jpeg,image/jpg"
    multiple
    :limit="3">
    <i class="ch-icon--upload-cloud"></i>
    <div class="el-upload__text">Drop images (4 max) here or <em>click to upload</em></div>
  </el-upload>
</template>

<script>
export default {
  name: 'PhotoEvidenceAdd',
  props: {
    show: Boolean,
    photoUrls: Array
  },
  data () {
    return {
      cloudinaryUrl: 'https://api.cloudinary.com/v1_1/reporter/upload',
      cloudinaryPresetUpload: 'lsdfksf23',
      selectedPhotos: [],
      form: {
        photo_urls: []
      },
      uploading: false
    }
  },
  computed: {
    setPhotoUrls: {
      get () {
        return this.photoUrls
      },
      set (value) {
        this.$emit('update:photoUrls', value)
      }
    }
  },
  watch: {
    selectedPhotos () {
      if (this.selectedPhotos.length) {
        document.querySelector('.upload-demo').classList.add('hide')
      }
    }
  },
  methods: {
    setImages (file) {
      this.selectedPhotos.push(file)
    },
    removeImage (file) {
      this.selectedPhotos = this.form.selectedPhotos.filter(photo => photo.uid !== file.uid)
    },
    limitExceed () {
      this.$message.error('Limit exceeded! 3 files at a time')
    },
    uploadImages () {
      this.uploading = true
      let isLast = false
      this.selectedPhotos.forEach((photo, index) => {
        isLast = index === this.selectedPhotos.length - 1
        this.uploadToCloudinary(photo, isLast)
      })
    },
    uploadToCloudinary (photo, isLast) {
      this.uploading = true
      const formData = new FormData()
      const image = photo.raw

      formData.append('file', image)
      formData.append('folder', this.$route.params.id)
      formData.append('upload_preset', this.cloudinaryPresetUpload)

      fetch(this.cloudinaryUrl, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          this.setPhotoUrls.push(data.url)
          if (isLast) {
            //
          }
        })
        .catch(() => {
          this.$message.error('Unable to upload image')
          this.uploading = false
        })
    }
  }
}
</script>

<style lang="scss">
.upload-demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .el-upload-dragger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  i.ch-icon--upload-cloud {
    font-size: 3rem;
    font-weight: 700;
  }

  &.hide {
    .el-upload-dragger {
      height: 60px;
      border: none;
      width: 100px;
      i, div {
        opacity: 0;
        visibility: hidden;
        position: absolute;
      }
    }
  }
}

.el-upload-list.el-upload-list--picture {
  width: 100%;
}

.el-upload-list__item {
  object-fit: cover;

  .el-icon-close {
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    right: 20px;
  }
}

.el-upload-list__item-thumbnail {
  object-fit: cover;
}
</style>

import Image from '../models/Image'

export default {
    render(image: Image) {
        return {
            id: image.id,
            //url: `http://localhost:3333/uploads/${image.path}`192.168.0.18
            url: `http://192.168.0.18:3333/uploads/${image.path}`
        }
    },

    renderMany(image: Image[]) {
        return image.map(image => this.render(image))
    }
}
const banner = "(продукт организации Meta, которая признана экстремистской на территории РФ)"

// Баннер для соблюдения законодательства РФ при 
export default function antiExremBanner () {
    return {
      name: 'banner',
      renderChunk (code: string) {
        console.log(banner+"123123");
        return code.replace(/Facebook/g,"Facebook "+banner);
      }
    }
  }
"use client"
import useProcessMDX from '@/app/hooks/useProcessMDX'
import { TextAlignLeftIcon } from '@/components/ui/icons/text-allign-left-icon'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

export default function DocContentPage() {
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const { data } = useProcessMDX()

  const getData = useCallback(async () => {
    setLoading(true)
    console.log("rendering");

    const getProcessedData = await data("https://raw.githubusercontent.com/gitmahin/graphQL-with-nextjs-ssr/d07d49d5a2546d8d715de75612db1f990b3723cd/README.md")
    if (getProcessedData.data) {
      setContent(getProcessedData.data)
    } else {
      setContent("No data")
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <section className='fx-flex-ct gap-5 relative w-full h-full'>

        {loading && <span>Loading...</span>}
        <article  className="prose prose-gray dark:prose-invert w-full mt-[64px] pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit fugit laborum delectus error excepturi impedit fugiat hic, quis rerum deserunt optio maiores doloremque dolores ratione eaque at ab iste veritatis, eos incidunt officiis, eligendi amet. Deserunt molestiae at, aliquam veritatis accusantium vero minus perferendis minima aspernatur magni ut repudiandae rerum excepturi ipsum, consequuntur ratione necessitatibus? Natus nihil dicta perferendis, obcaecati, eius ea officiis quidem voluptates, illo nostrum distinctio facilis odit laboriosam eos hic. Unde voluptas, libero cupiditate omnis quos consequatur quaerat natus recusandae repellendus aliquid quia iure perferendis sequi veritatis eius optio repudiandae cumque illo accusantium suscipit necessitatibus dignissimos error est? Alias quia voluptatem adipisci asperiores nihil architecto quo temporibus, quaerat ea excepturi aperiam inventore labore consequatur iste iusto? Eius quis minus aut, suscipit iure culpa quidem architecto tempore quo blanditiis itaque dignissimos possimus excepturi, at eaque animi dolore velit nisi corrupti repellat ullam. Voluptatum necessitatibus excepturi ratione minima exercitationem sapiente quaerat, odio debitis unde, voluptatem error mollitia veniam architecto dolor itaque culpa inventore. Debitis cum porro fugit veritatis voluptates, culpa unde? Amet aperiam nihil ipsa eaque nobis magnam debitis optio, veniam, cupiditate, similique natus! Illum et nulla aperiam ex atque provident! Vel, officiis quibusdam. Aspernatur autem facilis nobis suscipit corporis deserunt adipisci voluptatem laudantium! Nulla consequuntur, vero eius ut fuga optio numquam magnam! Aut et facere ipsum totam nostrum enim nesciunt nobis, in quibusdam amet possimus repellat est nemo exercitationem accusantium deserunt quod velit voluptatum! Nostrum nihil ratione deleniti omnis eveniet inventore sed eligendi qui excepturi soluta. Assumenda non soluta eius qui autem reiciendis! Ut iste quam aliquid quos fugit veritatis et maiores a suscipit quibusdam, vitae, commodi fugiat id autem, dolorem repellat! Iusto, magni, dolorum similique quis quam ab accusamus atque rerum vero repudiandae fugiat. Cum dolore eveniet ut itaque minus aut provident ad dolores et tenetur, amet quia quo assumenda quos debitis consequuntur sapiente in mollitia est deleniti eaque consequatur voluptate cupiditate. Cum eos beatae ipsam rem at accusantium, quae assumenda, minus eius, voluptas et labore repellat expedita neque enim temporibus porro necessitatibus harum ipsum recusandae fugiat quod ad? Sed pariatur ea quidem minus dignissimos ipsum dicta tempora cupiditate. Quasi blanditiis possimus totam, quos animi officia consequatur. Accusamus consequatur ex expedita laborum excepturi, quisquam alias consectetur voluptas. Aut voluptatibus veritatis similique, unde, numquam molestias distinctio minima dignissimos asperiores rerum maxime libero provident. Expedita, blanditiis nesciunt quisquam veritatis, earum ea, quae commodi quis doloremque maxime deserunt accusantium. Natus voluptas nesciunt incidunt voluptatem quos voluptatibus veritatis vitae corporis quis illo velit placeat dolorem, a delectus, harum distinctio consequuntur eos obcaecati itaque fugit? Possimus optio, repudiandae, accusantium, praesentium velit quasi reprehenderit consectetur nihil quos perspiciatis ad voluptas quibusdam! Necessitatibus beatae magni libero rem maxime deleniti quia harum esse? Dolore quam unde ipsum necessitatibus eius, facere soluta nesciunt obcaecati tempora dolor pariatur odio facilis dignissimos quibusdam impedit possimus, vitae sed reprehenderit velit quis illum cupiditate porro expedita. Quibusdam pariatur quae unde in, exercitationem cumque quos earum aspernatur ad suscipit voluptas, illum omnis, rem tenetur temporibus nihil animi. Totam sapiente ex qui. Laudantium suscipit perspiciatis officia doloremque eligendi iusto totam temporibus. Ex placeat, iste error voluptatibus obcaecati vel veritatis eos! Quisquam eos voluptatem tempora molestiae, earum fuga eum quae? Odio repellat fugit sit, odit nulla quisquam id dolore quos ea quia voluptatum quo eveniet deleniti impedit molestiae soluta ducimus vel eum blanditiis voluptatibus delectus explicabo? Explicabo obcaecati ratione dolorem quibusdam aliquam earum sunt est tenetur, expedita adipisci. Porro magnam enim hic fugit suscipit, at tenetur in. Nam alias deleniti et quae obcaecati molestiae cum eaque porro ipsam molestias, consectetur labore recusandae libero ad, fuga excepturi tenetur ipsum iusto quod. Accusamus ipsum soluta earum aliquam perspiciatis ullam voluptatem placeat eveniet inventore. Quisquam incidunt culpa quas nostrum doloribus, ipsa quia soluta sit rerum aliquid corrupti illum iure impedit nam suscipit consectetur alias perspiciatis reprehenderit! Dolorem perspiciatis quo sed fugiat nostrum laboriosam quas. Voluptatibus accusantium doloribus dicta? Beatae laudantium debitis quaerat dolore molestiae dignissimos voluptatum minus eum, accusantium ad non, recusandae deleniti itaque! Voluptatum quod tempora accusantium, recusandae quo eaque, quibusdam enim hic necessitatibus inventore harum sit voluptatem ut esse. Odit, neque cum eum in deleniti ab amet quasi repellat doloremque? Inventore ipsa ipsum id porro amet, commodi deleniti quia dolore impedit quibusdam fugiat voluptates aspernatur nisi rem distinctio excepturi officiis ab numquam officia, natus vel? Iure sint enim aperiam laudantium delectus nisi mollitia eius? Exercitationem tenetur, iste reiciendis nostrum, architecto fugit, voluptatem totam labore est omnis vel velit ipsam earum blanditiis nihil? Velit eum recusandae doloremque reprehenderit accusantium iure ab ducimus, minus, tenetur amet vel exercitationem quo eligendi nisi enim. Dicta quod accusamus voluptatibus numquam esse ab totam nobis rem, autem voluptatem aspernatur error aut possimus fuga! Quo quaerat laborum, nam itaque cumque animi saepe officia veritatis, minima recusandae eaque reiciendis distinctio vitae similique vel porro voluptates excepturi? Ea necessitatibus eaque vel assumenda porro illum perferendis, beatae quae cumque molestiae eum. Doloremque repellat maiores tenetur, molestiae dolore saepe nesciunt praesentium cum natus dolores dolor, a numquam quibusdam eos assumenda optio labore magni? Repudiandae nisi dolore consectetur inventore? At culpa ea nesciunt quam sint, natus rerum atque, inventore, a totam deserunt ab? Dolorum voluptatem expedita nobis dolorem voluptates laudantium rerum nesciunt, provident, saepe natus cum optio vitae quia quod hic nisi repellat laborum enim tempore, perferendis maiores cumque explicabo similique reiciendis? Qui atque debitis ipsum. Quasi, expedita, officia doloribus dignissimos nobis quis fugiat odit minima, voluptas harum a nulla assumenda maxime consequuntur ipsa autem adipisci exercitationem aliquid excepturi! Accusamus, blanditiis vero. Fuga consequatur dolor cum culpa perferendis nam inventore veritatis consequuntur. Quidem, assumenda doloremque vitae aut sapiente quae, vel repellat, facilis dicta dignissimos error. Quaerat harum laborum exercitationem nihil aliquid deserunt nostrum maiores praesentium sint? Saepe nostrum qui blanditiis quia voluptatum quisquam quaerat similique, deleniti repellendus error ex aspernatur ut eaque cumque reiciendis possimus vel soluta optio doloremque esse magni delectus placeat! Temporibus provident suscipit ea, nihil tempore nesciunt architecto, similique at et voluptatum tempora numquam dolor quasi pariatur error nulla maxime dolorem accusantium alias soluta voluptatibus. Non ratione, ipsam veniam sequi consequatur molestias.
        </article>

        <aside className=' w-[220px] sticky top-0 h-screen flex-shrink-0 text-[15px]'>
          <nav className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-auto custom-scrollbar doc-hide-scrollbar hover:doc-hide-scrollbar-show pb-16'>
            <div className='fx-flex-cl gap-2 sticky top-0 fx-primary-bg pb-1'>
              <TextAlignLeftIcon width={15} height={15} />
              <h3 className='font-medium'>On this page</h3>
            </div>
            <ul className='fx-label-color leading-7'>
              {
                Array.from({ length: 70 }).map((_, i) => {
                  return <Link href={""} key={i}>
                    <li>Hello world</li>
                  </Link>

                })
              }

            </ul>
          </nav>
        </aside>
      </section>
    </>
  )
}



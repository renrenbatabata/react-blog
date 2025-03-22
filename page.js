// Aboutページ
import Meta from "@/components/meta"
import Container from "@/components/cotainer";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PostBody from "@/components/post-body";
import Contact from "@/components/contact";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import Image from "next/image";
import eyecatch from "@/images/about.jpg"

export const metadata = {
    title: "アバウト",
    description: "Default description for the app.",
  };


const About = () => {
    return (
        <Layout>
            <Meta pageTitle="アバウト" />
            <Hero
                title="About"
                subtitle="About decelopment activities"
            />
            <Container>
                <figure>
                    <Image
                        src={eyecatch}
                        alt=""
                        layout="responsive"
                        sizes="(min-width:1152px) 1152px,100vw"
                        priority
                        placeholder="blur"
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <h2>Reactとは？</h2>
                            <p>
                                Reactは、Facebook（現Meta）によって開発された、Webアプリケーションのユーザーインターフェースを効率的に作るためのJavaScriptライブラリです。2013年にオープンソースとして公開されて以来、世界中の多くのエンジニアに支持され、現在ではフロントエンド開発に欠かせない技術のひとつとなっています。特徴的なのは、UIを「コンポーネント」と呼ばれる小さな単位で分けて設計する点です。これにより、画面の一部だけを簡単に管理・再利用できるため、保守性が高く、大規模な開発でも効率よく進めることができます。
                            </p>

                            <h3>Reactの魅力と強み</h3>
                            <p>
                                Reactの大きな魅力は、仮想DOM（Virtual DOM）という仕組みによる高速な描画性能です。データの変更があった場合、直接HTMLを書き換えるのではなく、仮想DOM上で差分だけを計算し、必要な部分だけを更新することで、動きのあるアプリケーションでもパフォーマンスを落とさずに快適に動かすことができます。また、Reactは「JSX」という独自の記法を使って、JavaScriptの中にHTMLのようなコードを書けるのも特徴です。これによって、デザインとロジックが一体となったコードが書けるため、UIの実装がとても直感的になります。さらに、Reactは公式の機能に加え、状態管理ライブラリやルーティング、サーバーサイドレンダリングなど、多くの周辺技術とも相性が良く、拡張性が高いのも魅力のひとつです。実際に、InstagramやNetflix、Airbnbなどの有名なサービスでもReactが採用されており、信頼性の高いライブラリと言えるでしょう。
                            </p>
                            <h2>Reactとは？</h2>
                            <p>
                                Reactは、Facebook（現Meta）によって開発された、Webアプリケーションのユーザーインターフェースを効率的に作るためのJavaScriptライブラリです。2013年にオープンソースとして公開されて以来、世界中の多くのエンジニアに支持され、現在ではフロントエンド開発に欠かせない技術のひとつとなっています。特徴的なのは、UIを「コンポーネント」と呼ばれる小さな単位で分けて設計する点です。これにより、画面の一部だけを簡単に管理・再利用できるため、保守性が高く、大規模な開発でも効率よく進めることができます。
                            </p>

                            <h3>Reactの魅力と強み</h3>
                            <p>
                                Reactの大きな魅力は、仮想DOM（Virtual DOM）という仕組みによる高速な描画性能です。データの変更があった場合、直接HTMLを書き換えるのではなく、仮想DOM上で差分だけを計算し、必要な部分だけを更新することで、動きのあるアプリケーションでもパフォーマンスを落とさずに快適に動かすことができます。また、Reactは「JSX」という独自の記法を使って、JavaScriptの中にHTMLのようなコードを書けるのも特徴です。これによって、デザインとロジックが一体となったコードが書けるため、UIの実装がとても直感的になります。さらに、Reactは公式の機能に加え、状態管理ライブラリやルーティング、サーバーサイドレンダリングなど、多くの周辺技術とも相性が良く、拡張性が高いのも魅力のひとつです。実際に、InstagramやNetflix、Airbnbなどの有名なサービスでもReactが採用されており、信頼性の高いライブラリと言えるでしょう。
                            </p>
                        </PostBody>
                    </TwoColumnMain>

                    <TwoColumnSidebar>
                        <Contact />
                    </TwoColumnSidebar>
                </TwoColumn>
            </Container>
        </Layout>
    )
}

export default About;
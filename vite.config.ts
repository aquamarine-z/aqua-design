import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react(), dts({ include: ['packages'] }),],
    css:{

        //* css模块化
        modules: { // css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            hashPrefix: 'prefix',
        },
        //* 预编译支持less
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
            },
        },
    },
    build: {
        // 打包输出的目录
        outDir: 'lib',
        // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
        cssTarget: 'chrome61',
        lib: {
            // 组件库源码的入口文件
            entry: 'packages/index.ts',
            // 组件库名称
            name: 'aqua-ui',
            // 文件名称, 打包结果举例: my-packages.umd.cjs
            fileName: 'aqua-ui',

        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['react', 'react-dom'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'react',
                    'react-dom': 'react-dom',
                },
            },
        },
    }
})

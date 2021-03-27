/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Heading,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormLabel
} from '@chakra-ui/react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import { PlayCircleTwoTone } from '@ant-design/icons';
import { motion, useAnimation } from "framer-motion"
import { JSHINT, LintError, LintOptions } from 'jshint';



// import 'codemirror/theme/seti.css'
import './CodeArea/codeArea.css'


import {
  Playground,
  SkypackImportMap,
  SourceFile,
  TypescriptTransform,
  JavascriptTransform,
  CssTransform,
  Highlight,
  PlaygroundLayout,
  useThemeColors,
  EditorGroup
} from './shared/modules'


// eslint-disable-next-line import/no-webpack-loader-syntax
import indexJs from '!!raw-loader!./assets/index.txt'
// eslint-disable-next-line import/no-webpack-loader-syntax
import interactiveContainerJsx from '!!raw-loader!./assets/InteractiveContainer.txt'
// eslint-disable-next-line import/no-webpack-loader-syntax
import utilsJs from '!!raw-loader!./assets/utils.txt'
// eslint-disable-next-line import/no-webpack-loader-syntax
import useDataJs from '!!raw-loader!./assets/useData.txt'
// eslint-disable-next-line import/no-webpack-loader-syntax
import stylesCss from '!!raw-loader!./assets/styles.txt'
import { checkElemType } from './CodeArea/customVm'
import { createStack } from './CodeArea/clean';
import { lintBLock } from './CodeArea/Lint';

const importMap = SkypackImportMap({
  react: 'latest',
  'react-dom': 'latest',
  'framer-motion': 'latest'
})

const transforms = {
  jsx: JavascriptTransform(),
  ts: TypescriptTransform(),
  js: JavascriptTransform(),
  css: CssTransform()
}

interface FileHighlight {
  filePath: string
  highlight: Highlight
}

const highlightExample: FileHighlight = {
  highlight: {
    lines: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    className: 'highlight'
  },
  filePath: 'index.js'
}

const CodeArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme] = useState('dracula')
  const controls = useAnimation()
  const [files, setFiles] = useState([
    {
      path: 'index.js',
      contents: indexJs
    },
    {
      path: 'utils.js',
      contents: utilsJs
    },
  ])
  const { } = useState();
  const [active, setActive] = useState('index.js')
  const [highlight, setHighlight] = useState<FileHighlight | null>(null)
  const [scale, setScale] = useState<number>(1)
  const colors = useThemeColors(theme);
  const [rawStack, setRawStack] = useState<string[]>([]);
 const [lintErrors, setLintErrors] = useState<LintError[]>([])


  useEffect(() => {
    console.log('beforeraw', stackStr)
    if(rawStack.length < 1) {
      addEmptyLines();
    }
  }, [rawStack])

  function addEmptyLines() {
    const minLines = 10;
    let startingValue = '';
    for (let i = 0; i < minLines; i++) {
        startingValue += '\n';
    }
    const emptyEditorStack = startingValue.split('\n');
    setRawStack(emptyEditorStack)
  }


  const updateFile = (codeItems: string) => {
    // const cleanedStack = createStack(codeItems);
    // const errors = lintBLock(cleanedStack);

    // setRawStack(codeItems.split("\n"));
    // setLintErrors(errors);
  }

  // const runCode = (code: string) => {
  //   setIsOpen(!isOpen)
  //   console.log('isOpen', isOpen)
  // }
  const stackStr = rawStack.length >= 1 ? rawStack.join("") : "";

  console.log('rawastack', stackStr)

  return (
    <>

      <Box position='fixed' w='50%' top={0} left={0} bottom={0}>
        <Playground
          value={stackStr}
          active={active}
          onActiveChange={setActive}
          onLoading={() => console.log('loading')}
          onLoad={() => console.log('loaded')}
          onError={(err: any) => {
            console.log({ message: err.message })
            console.log(Object.keys(err))
          }}
          entrypoint='index.js'
          files={files}
          importMap={importMap}
          // onLog={(data: any) => window.alert(JSON.stringify(data))}
          transforms={transforms}
          onFileChange={updateFile}
          theme={theme}
          editorOptions={(file) => {
            const base = {}
            if (highlight && file.path === highlight.filePath) {
              console.log('file', file)
              return {
                ...base,
                highlight: highlight.highlight
              }
            }
            return base
          }}
          layout={PlaygroundLayout.Vertical}
          focusOnActivation={false}
          styles={{
            sandbox: {
              interpreter: {
                background: colors.background,
                borderTop: `3px solid ${colors.overlay}`
              },
              loading: {
                color: colors.foreground
              }
            }
          }}
          data={scale}
        />
      </Box>
      <div style={{
        // width: '500px',
        // height: '200px',

      }}>

        <motion.div
          layout
          data-isopen={isOpen}
          initial={{ borderRadius: 50 }}
          // onClick={() => runCode(codeElems)}
          className="play"
          style={{
            bottom: 50,
            left: 0,
            zIndex: 10000000000,
            position: 'fixed',

          }}
        >
          <PlayCircleTwoTone className="child" />
          {/* <motion.div className = "play" layout style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }} /> */}
        </motion.div>

      </div>
      <Box
        className='tutorial'
        p={'4rem'}
        w='50%'
        position='fixed'
        zIndex={100}
        top={0} right={0} bottom={0}
      >
        <Stack spacing={6}>
          <h1 className="codeError">React ESM Sandbox Demo</h1>
          <Text size='sm'>
            In this mini tutorial, we'll build a special container that rotates
            on hover. Try hovering over the image to the right and take note of
            the effect.
            </Text>
          <Text size='sm'>
            In order to implement this effect, we'll need a utility that can get
            the mouse's position in relation to the center of the hovered
            element. Below is a code snippet to grab the mouse position. Try
            editing this file and see what happens.
            </Text>
          {/* <EditorGroup
              theme={theme}
              classes={{
                root: 'inline-editor'
              }}
              active={utilsFile.path}
              files={[utilsFile]}
              onFileChange={(val) => {
                updateFile(val)
                setActive(val.path)
              }}
            />
            <Text size='sm'>
              Next, let's create a component that consumes the mouse position and
              performs rotations for us.
            </Text>
            <EditorGroup
              theme={theme}
              classes={{
                root: 'inline-editor'
              }}
              active={containerFile.path}
              files={[containerFile]}
              onFileChange={(val) => {
                updateFile(val)
                setActive(val.path)
              }}
            /> */}
          <Text size='sm'>
            <span>
              On the right we consume InteractiveContainer in the Playground.{' '}
            </span>
            <span
              className={'highlightable'}
              onMouseEnter={() => {
                setActive('index.jsx')
                setHighlight(highlightExample)
              }}
              onMouseLeave={() => setHighlight(null)}
            >
              Try hovering over this to have a look at the App component where
              InteractiveContainer is used
              </span>
              .
            </Text>
          <Text size='sm'>
            Another neat thing about react-esm-sandbox is that you can
            communicate with the interpreter in real time. This slider is hooked
            up to control the scale of the image in the interpreter.
            </Text>
          <FormLabel>Image Scale</FormLabel>
          <Slider
            colorScheme='blue'
            defaultValue={scale}
            onChange={setScale}
            min={0.5}
            max={1.5}
            step={0.1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bg='blue.600' />
          </Slider>
        </Stack>
      </Box>
    </>
  )
}

export default CodeArea

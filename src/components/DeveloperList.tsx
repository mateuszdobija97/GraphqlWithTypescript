import { Dispatch, SetStateAction } from 'react'

import { Developer } from '../__generated__/types'
import { IsEditWithIdType } from '../types'

import { DeveloperItem } from '.'

type Props = {
    developers: Developer[],
    setIsEditWithId: Dispatch<SetStateAction<IsEditWithIdType>>
}

const DeveloperList = ({ developers, setIsEditWithId }: Props) => <ul className="app__developer-list">
{ developers.map((developer) => (
  <DeveloperItem
    key={developer.id}
    developer={developer}
    setIsEditWithId={setIsEditWithId}
  />
)) }
</ul>

export default DeveloperList
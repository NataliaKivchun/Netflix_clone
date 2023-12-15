import Pagination from 'react-bootstrap/Pagination'
import _ from 'lodash'
import './pagination.css'

interface PaginationProps {
	total_pages: number
	setPage: (page: number) => void
	currentPage: number
}
export const AppPagination = ({
	total_pages,
	setPage,
	currentPage
}: PaginationProps) => {
	const pages = _.range(1, total_pages + 1)

	const cropPages = (pages: number[]) => {
		if (pages.length <= 5) {
			return pages
		}
		if (currentPage <= 3) {
			return pages.slice(0, 5)
		}
		if (currentPage + 2 >= total_pages) {
			return pages.slice(total_pages - 5, total_pages)
		}
		return pages.slice(currentPage - 3, currentPage + 2)
	}

	const pagesCrop = cropPages(pages)

	const paginationListStyle = {
		listStyleType: "none",
		display: "flex",
		gap: "10px",
		alignSelf: "center",
		marginTop: "30px"
	}

	return (
		<Pagination size="lg" style={paginationListStyle}>
   <Pagination.First
    disabled={currentPage === 1}
    onClick={() => setPage(1)} />
			<Pagination.Prev
				disabled={currentPage === 1}
				onClick={() => {
					if (currentPage > 1) {
						setPage(currentPage - 1)
					}
				}}
			/>
			{pagesCrop.map((page) => (
					<Pagination.Item
						key={page}
						active={page === currentPage}
						onClick={() => setPage(page)}
					>
						{page}
					</Pagination.Item>
			))}
			{pagesCrop[pagesCrop.length - 1] < total_pages - 1 && (
				<>
					<Pagination.Ellipsis />
     <Pagination.Item
      key={total_pages}
						active={total_pages === currentPage}
						onClick={() => setPage(total_pages)}
					>
						{total_pages}
					</Pagination.Item>
				</>
			)}
			<Pagination.Next
				disabled={currentPage === total_pages}
				onClick={() => {
					if (currentPage < total_pages) {
						setPage(currentPage + 1)
					}
				}}
			/>
			<Pagination.Last
				disabled={currentPage === total_pages}
				onClick={() => setPage(total_pages)}
			/>
		</Pagination>
	)
}
import React, { useEffect, useMemo, useState } from "react";
import { Center, Square, Circle, SimpleGrid } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box,
  Button,
  IconButton,
  Flex,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
  Heading,
  Image,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

// import Data from "../Dataset/Data.json";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "./Columns";
import { listAll } from "src/pages/md";
import { doc } from "firebase/firestore";
const DataTable = () => {
  //   let columns = Object.keys(Data[0]);  //columns list before using react table.

  // we momoized the columns and data so that our table don't get render again and again.

  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await listAll();
    console.log(data.docs);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // function DataTable({ data, itemsPerPage }) {
  //   const [currentPage, setCurrentPage] = useState(1);
  
  //   const handleClick = (e, index) => {
  //     e.preventDefault();
  //     setCurrentPage(index);
  //   };
  
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
  //   const pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }}
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    row,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setSortBy,
    allColumns,
  } = tableInstance;

  const { pageSize, pageIndex } = state;

  const getstatus = {"true": "แข่งขันเสร็จแล้ว", "false": "แข่งขันยังไม่เสร็จ"}

  const [selectedSortColumn, setSelectedSortColumn] = useState({
    id: "",
    desc: false,
  });

  // function handleSort(e) {
  //   let temp = Object.assign({}, selectedSortColumn);
  //   temp["id"] = e;
  //   setSelectedSortColumn(temp);
  //   setSortBy([temp]);
  // }

  // const typeOfSort = (e) => {
  //   let tempColumn;
  //   if (e == "0") {
  //     tempColumn = Object.assign({}, selectedSortColumn);
  //     tempColumn["desc"] = false;
  //     setSelectedSortColumn(tempColumn);
  //     setSortBy([tempColumn]);
  //   } else {
  //     tempColumn = Object.assign({}, selectedSortColumn);
  //     tempColumn["desc"] = true;
  //     setSelectedSortColumn(tempColumn);
  //     setSortBy([tempColumn]);
  //   }
  // };

  console.log({ cols: allColumns });
  return (
    <Container
      maxW="auto"
      maxH={"auto"}
      bgGradient="linear(to-tl,#08203e,#08203e)"
    >
      <Container maxW="7xl" maxH="auto">
        {/* <Text p='1em' fontSize='2lpx' textAlign='center' ></Text> */}
        <Box>
          <Center>
            {" "}
            <Heading
              lineHeight={1}
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              mt={10}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
                bgGradient="linear(to-tl,#ffce41, #f06778)"
                bgClip="text"
              >
                List Score
              </Text>
              <br />
            </Heading>
          </Center>
        </Box>

        <Text p="1em" fontSize="2lpx" textAlign="center"></Text>
        <Box maxH="auto" overflowY="auto" mt={5} mb={8}>
        <Table
            {...getTableProps()}
            size="md"
            variant="striped"
            colorScheme="gray"
          >
            <Thead
              p="0"
              position="sticky"
              zIndex="1"
              top="0px"
              style={{ overflow: "scroll" }}
              className="font-notosan"
              bg="#263c75"
            >
              {headerGroups.map((headerGroup, indexKey) => (
                <Tr p="0" key={indexKey} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <Th
                      borderColor="gray.200"
                      p="1em"
                      className="th1"
                      key={columnIndex}
                      fontSize="16.5px"
                      color={"#Dfdfe8"}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {/* This will render the Title of column */}
                      {column.render("Header")}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon />
                        ) : (
                          <TriangleUpIcon />
                        )
                      ) : (
                        ""
                      )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody className="body1" p="1em" {...getTableBodyProps()}>
              {data.map((doc,index) => {
                
                return (
                  
                  <Tr className="tr1" key={doc["id"]}>
                    <Td
                      className="td1"
                      fontSize="15px"
                      bg="white"
                      color={"black"}
                    >
                      {doc["name-a"] + " vs " + doc["name-b"]}
                    </Td>
                    <Td
                      className="td1"
                      fontSize="15px"
                      bg="white"
                      color={"black"}
                    >
                      {doc["score-a"] + " : " + doc["score-b"]}
                    </Td>
                    <Td
                      className="td1"
                      fontSize="15px"
                      bg="white"
                      color={"black"}
                    >
                      {doc["set-a"] + " : " + doc["set-b"]}
                    </Td>
                    <Td
                      className="td1"
                      fontSize="15px"
                      bg="white"
                      color={"black"}
                    >
                      {doc["type"]}
                    </Td>
                    <Td
                      className="td1"
                      fontSize="15px"
                      bg="white"
                      color={"black"}
                    >
                      
                      {getstatus[String(doc["finished"])]}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          {/* go to page button */}
        </Box>
        <Flex
          // borderTop="5px solid"
          borderColor="gray.200"
          justifyContent="flex-end"
          mt={5}
        >
          <Spacer />
          <Flex alignContent="center" justifyContent="space-around" mb={20}>
            <IconButton
              _focus={{ boxShadow: "" }}
              _hover={{ backgroundColor: "" }}
              _active={{ backgroundColor: "" }}
              color="gray.800"
              bg="white"
              fontSize="15px"
              icon={<ArrowLeftIcon />}
              disabled={!canPreviousPage}
              onClick={() => gotoPage(0)}
            />
            <IconButton
              _focus={{ boxShadow: "" }}
              _hover={{ backgroundColor: "" }}
              _active={{ backgroundColor: "" }}
              color="gray.800"
              bg="white"
              fontSize="30px"
              icon={<ChevronLeftIcon />}
              disabled={!canPreviousPage}
              onClick={() => previousPage()}
            />
            <Text m="0" alignSelf="center" color="#ffffff">
              {pageIndex + 1} - {pageOptions.length}{" "}
            </Text>
            <IconButton
              _focus={{ boxShadow: "" }}
              _hover={{ backgroundColor: "" }}
              _active={{ backgroundColor: "" }}
              color="gray.800"
              bg="white"
              fontSize="30px"
              icon={<ChevronRightIcon />}
              disabled={!canNextPage}
              onClick={() => nextPage()}
            />
            <IconButton
              _focus={{ boxShadow: "" }}
              _hover={{ backgroundColor: "" }}
              _active={{ backgroundColor: "" }}
              color="gray.800"
              bg="white"
              fontSize="15px"
              icon={<ArrowRightIcon />}
              disabled={!canNextPage}
              onClick={() => gotoPage(pageCount - 1)}
            />
            <Text
              m="0"
              alignSelf="center"
              borderRightColor=""
              defaultChecked={pageIndex + 1}
              borderColor="gray.300"
              fontWeight="bold"
              fontSize="sm"
              whiteSpace="nowrap"
              color="#ffffff"
            >
              ไปยังหน้า
            </Text>
            <Input
              mx="5px"
              alignSelf="center"
              borderColor="white"
              color="#ffffff"
              onChange={(e) => {
                let pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              w="10%"
              size="sm"
            />
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default DataTable;
